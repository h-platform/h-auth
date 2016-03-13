var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_user'
}, {
  schema: [
    Fields.StringField('username'),
    Fields.StringField('email'),
    Fields.StringField('facebookId'),
    Fields.StringField('googleId'),
    Fields.StringField('displayName')
  ]
});