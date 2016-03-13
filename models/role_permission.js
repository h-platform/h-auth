var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_role_permission'
}, {
  schema: [
    Fields.IntField('role_id', {required: true}),
    Fields.IntField('permission_id', {required: true})
  ]
});