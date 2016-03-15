var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_permission',
}, {
  schema: [
    Fields.StringField('action', {required: true}),
    Fields.StringField('resource', {required: true}),
    Fields.StringField('context', {required: true})
  ]
});