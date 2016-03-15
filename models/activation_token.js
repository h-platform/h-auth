var Fields = require('bookshelf-schema/lib/fields');
var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({ 
  tableName: 'um_activation_token',

  initialize: function(attributes, options) {
    this.on('saving', this.saving);
  },

  saving: function(model, attrs, options){
    //do some actions before saving the model
    if(options.method == 'insert') {
      //inserting
      model.set('created_at', new Date());
    } else {
      //updating
      model.set('updated_at', new Date());
    }
  },
  
}, {
  schema: [
    Fields.StringField('token'),
    Fields.StringField('email'),
    Fields.DateTimeField('created_at'),
    Fields.DateTimeField('updated_at'),
    Fields.BooleanField('consumed'),
    Fields.DateTimeField('consumed_at')
  ]
});