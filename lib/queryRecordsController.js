var _ = require('lodash');
var bookshelf = require('../bookshelf');
var Models = require('../models');

module.exports = function(config){
  return {
    pattern: { role: config.role, model: config.model, cmd:'queryRecords' }, 
    action: function (args, callback) {

      console.log('***************', config);

      var collection = Models[config.model].collection();
      
      collection.query(function(qb){
        if (config.limit) {
          qb.limit(config.limit);
        }
        
        if (config.select_query_keys) {
          qb.select(config.select_query_keys);
        } else if (config.select_keys) {
          qb.select(config.select_keys);
        }

        if (config.orderBy) {
          qb.orderBy(config.orderBy);
        }

        if(_.isArray(args.where)){
          _.each(args.where, function(clause){
            qb.where(clause.col, clause.op , clause.val);
          });
        }
      });

      collection.fetch({withRelated: config.relations}).then(function(records) {
        callback(null, { records: records});
      }).catch(function(error){
        callback(error, null);
      });

    }
  };
};
