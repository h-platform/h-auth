var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');
var models = require('../models');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_badge',

  role: function() {
    return this.belongsTo(models.role);
  },

  user: function() {
    return this.belongsTo(models.user);
  },

}, {
  schema: [
    Fields.IntField('user_id', {required: true}),
    Fields.IntField('role_id', {required: true}),
    Fields.StringField('resource'),
    Fields.IntField('resource_id'),
    Fields.StringField('context'),
    Fields.IntField('context_id'),
  ]
});