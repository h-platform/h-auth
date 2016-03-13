var bookshelf = require('../bookshelf');
var Models = require('../models');

module.exports = function(config){
  return {
    pattern: { role: config.role, model: config.model, cmd:'getRecords' }, 
    action: function (args, callback) {

      var collection = Models[config.model].collection();
      
      collection.query(function(qb){
        if (config.select_query_keys) {
          qb.select(config.select_query_keys);
        } else if (config.select_keys) {
          qb.select(config.select_keys);
        }
      });

      if (config.relations) {
        collection.load(config.relations);
      }

      collection.fetch().then(function(records) {
        callback(null, { records: records});
      }).catch(function(error){
        callback(error, null);
      });

    }
  };
};
