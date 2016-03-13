var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');
var models = require('../models');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_role',
  
  initialize: function(attributes, options) {
    this.on('saving', this.beforeSave);
  },

  beforeSave: function(model, attrs, options){
    //do some actions before saving the model
  },

  category: function() {
    return this.belongsTo(models.category);
  },

  queue: function() {
    return this.belongsTo(models.queue);
  },

  status: function() {
    return this.belongsTo(models.status);
  },

}, {
  schema: [
    Fields.StringField('role_name'),
  ]
});