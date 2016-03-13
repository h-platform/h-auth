var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');
var models = require('../models');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_permission',
  
  initialize: function(attributes, options) {
    this.on('saving', this.beforeSave);
  },

  beforeSave: function(model, attrs, options){
    //do some actions before saving the model
  },

  post: function() {
    return this.belongsTo(models.post);
  },
}, {
  schema: [
    Fields.StringField('action', {required: true}),
    Fields.StringField('resource', {required: true}),
    Fields.StringField('context', {required: true})
  ]
});