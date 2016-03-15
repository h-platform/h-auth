var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_role',
}, {
  schema: [
    Fields.StringField('role_name'),
  ]
});