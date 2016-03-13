var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_user'
}, {
  schema: [
    Fields.StringField('username'),
    Fields.StringField('email'),
    Fields.StringField('facebook_id'),
    Fields.StringField('google_id'),
    Fields.StringField('display_name')
  ]
});