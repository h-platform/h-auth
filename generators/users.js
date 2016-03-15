var models = require('../models');

function doExecute() {
    // Inserts seed entries
    models.user.forge({username: 'admin', email: 'admin@example.com', display_name: 'System Administrator', password: '1234'}).save().then(function(savedUser){
        console.log('user saved ' + savedUser.get('email'));
    });
    models.user.forge({username: 'user', email: 'user@example.com', display_name: 'System User', password: '1234'}).save().then(function(savedUser){
        console.log('user saved ' + savedUser.get('email'));
    });
}

setTimeout(doExecute, 500);