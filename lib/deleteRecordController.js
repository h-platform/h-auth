var bookshelf = require('../bookshelf');
var Models = require('../models');

module.exports = function(config){
  return {
    pattern: { role: config.role, model: config.model, cmd:'deleteRecord' }, 
    action: function (args, callback) {
      Models[config.model]
      .forge({id: args.id})
      .fetch()
      .then(function(record) {
        callback(null, { record: record});
      }).catch(function(error){
        l.error('Error during deleteRecord operation for model:', config.model);
        console.log(err);
        callback(error, null);
      });
    }
  };
};
