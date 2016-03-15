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
            if(!record || record === null) {
                l.info('User email not found, creating new user record:' + args.data.email );
                var values = _.pick(args.data, ['email','facebook_id','display_name']);
                record = Models[config.model].forge();
            }

            // console.log(args.data);
            // console.log(record);
            
            record.set('facebook_activated', 1);
            if(args.data.facebook_id) {
                record.set('facebook_id', args.data.facebook_id);
            }
    
            if(args.data.google_id) {
                record.set('google_id', args.data.google_id);
            }
    
            if(args.data.email) {
                record.set('email', args.data.email);
            }
    
            if(args.data.username) {
                record.set('username', args.data.username);
            }
    
            if(args.data.display_name) {
                record.set('display_name', args.data.display_name);
            }
        
            if(record.hasChanged()){
                l.info('Saving user data to db: ' + args.data.email);
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
            Models[config.model].login(args.data)
            .then(function(foundUser) {
                return callback(null, { user: foundUser.toJSON()} );
            }).catch(function(err){
                console.log(err);
                return callback(err);
            });
        }
}];
