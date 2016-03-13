var bookshelf = require('../bookshelf');
var Models = require('../models');

module.exports = function(config){
  return {
    pattern: { role: config.role, model: config.model, cmd:'getRecord' }, 
    action: function (args, callback) {

      myModel = Models[config.model].forge({id: args.id});

      myModel.query(function(qb){
        if (config.select_record_keys) {
          qb.select(config.select_record_keys);
        } else if (config.select_keys) {
          qb.select(config.select_keys);
        }
      });

      myModel.fetch({withRelated: config.relations}).then(function(record) {
        callback(null, { record: record});
      }).catch(function(error){
        callback(error, null);
      });
    }
  };
};
