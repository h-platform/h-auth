var bookshelf = require('../bookshelf');
var Models = require('../models');
var _ = require('lodash');
var l = require('../logger');

module.exports = function(config){
  return {
    pattern: { role: config.role, model: config.model, cmd:'saveRecord' }, 
    action: function (args, callback) {
      var msg = ''; //Temp msg used for error
      incoming_record = args.record;

      //Make Sure model exsists
      if(!_.isObject(Models[config.model])){
        msg = 'Error during saveRecord operation for model:' + config.model + '. Could not find model specified in config file.';
        l.error(msg);
        console.log('config:', config);
        callback(msg, null);
      }

      //Filter allowed save_keys from the config if exsists
      if(_.isArray(config.save_keys)) {
        var incoming_keys = _.keys(incoming_record);
        var difference = _.difference(incoming_keys, config.save_keys);
        if(_.isArray(difference) && difference.length) {
          msg = 'Dropping incoming keys on saveRecord operation for model:' + config.model;
          l.warn(msg);
          console.log('dropped keys:', difference);
          incoming_record = _.omit(incoming_record, difference);
        }
      }

      //Check if there are some key / value left in the incoming record
      if(_.keys(incoming_record).length === 0){
        msg = 'Error during saveRecord operation for model:' + config.model + ' No attribute values to be saved in incoming record. Maybe they are all dropped by configured filter.';
        l.error(msg);
        callback(new Error(msg), null);
      }

      //Try save the record
      Models[config.model]
      .forge(incoming_record)
      .save()
      .then(function(savedRecord) {
        //Reload the saved record
        return Models[config.model]
        .forge({id: savedRecord.id})
        .fetch();
      }).then(function(loadedRecord){
        callback(null, { record: loadedRecord.toJSON()});
      }).catch(function(err){
        l.error('Error during saveRecord operation for model:', config.model);
        console.log(err);
        callback(err, null);
      });

    }
  };
};
