var bookshelf = require('../../bookshelf');
var Models = require('../../models');
var config = require('./config');
var l = require('../../logger');
var _ = require('lodash');

//find the record with the email
//update the record with user info
//if some actual changes (dirty) save the record to db
//return the full user record retreived from the database

module.exports = [{
    pattern: { role: config.role, model: config.model, cmd:'findOrCreate' }, 
    action: function (args, callback) {
        if(!args.data.email) {
            l.log('email parameter not found');
            return callback('email parameter not found');
        }
    
        whereClause = {};
        whereClause.email = args.data.email;
    
        Models[config.model]
        .forge(whereClause)
        .fetch()
        .then(function(record) {
            if(!record) {
                record = Models[config.model].forge();
                l.log('user email not found, creating new user record:' + args.data.email );
            }
        
            if(args.data.facebook_id) {
                record.attributes.facebook_id = args.data.facebook_id;
            }
    
            if(args.data.google_id) {
                record.attributes.google_id = args.data.google_id;
            }
    
            if(args.data.email) {
                record.attributes.email = args.data.email;
            }
    
            if(args.data.username) {
                record.attributes.username = args.data.email;
            }
    
            if(args.data.display_name) {
                record.attributes.display_name = args.data.display_name;
            }
        
            if(record.hasChanged()){
                l.log('User data has changes, saving to db: ' + args.data.email);
                return record.save();
            } else {
                return record;
            }
        
        }).then(function(savedUser){
            return callback(null, { user: savedUser} );
        });
      }
    }, {
        pattern: { role: config.role, model: config.model, cmd:'validate' }, 
        action: function (args, callback) {
            if((!args.data.username && !args.data.email) || !args.data.password) {
                l.log('username or email parameters are required for user validation');
                return callback('email or username parameter are required');
            }
        
            whereClause = {};
            
            if(args.data.email) {
                whereClause.email = args.data.email;
            }
            
            if(args.data.username) {
                whereClause.username = args.data.username;
            }
        
            whereClause.password = args.data.password;
        
            Models[config.model]
            .forge(whereClause)
            .fetch()
            .then(function(record) {
                return callback(null, { user: record} );
            }).catch(function(err){
                return callback(err);
            });
        }
}];
