var bookshelf = require('../bookshelf');
var Models = require('../models');
var _ = require('lodash');

module.exports = function(config){
  return {
    pattern: { role: config.role, model: config.model, cmd:'queryRecord' }, 
    action: function (args, callback) {

      myModel = Models[config.model].forge();

      myModel.query(function(qb){
        // support config.select_keys
        if (config.select_record_keys) {
          qb.select(config.select_record_keys);
        } else if (config.select_keys) {
          qb.select(config.select_keys);
        }

        // support where: [{col:'' op:'' val:''}] in args
        if(_.isArray(args.where)){
          _.each(args.where, function(clause){
            qb.where(clause.col, clause.op , clause.val);
          });
        }

        //support loading by id
        if(args.id){
          qb.where(id, args.id);
        }

      });

      if (config.relations) {
        myModel.load(config.relations);
      }


      myModel.fetch().then(function(record) {
        callback(null, { record: record});
      }).catch(function(error){
        callback(error, null);
      });
    }
  };
};
