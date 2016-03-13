var u = require('../utils');
var l = require('../logger');
var _ = require('lodash');

var config = require('config');
var db_config = config.get('knex');

l.info("Database Server Configuration:", db_config);
var knex = require('knex')(db_config);

var count = 3;
var records = [];
var record;

var users = [
  'John',
  'Massy',
  'Goran'
];

for(i = 0 ; i < count ; i++){
  record = { 
    username: users[i],
    email: users[i] + '@example.com',
    display_name: users[i] + ' ' + users[i],
  };

  records.push(record);
}

knex.insert(records, 'id').into('um_user').then(function(insertedRecords) {
  console.log(insertedRecords);
  return 0;
}).catch(function(err) {
  console.log(err);
  return 1;
});