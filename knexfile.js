// load config settings.
var config = require('config');
var db_config = config.get('knex');

module.exports = {
  development: db_config,
  staging: db_config,
  production: db_config
};
