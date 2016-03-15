var models = require('../models');

function doTest() {
  models['user'].login({email:'admin@example.com', password:'1234'}).then(function(res){
    console.log('>>> user should be signed in by email >>>>>> ', res);
  });

  // models['user'].login({email:'admin@example.com', password:'1234456'}).then(function(res){
  //   console.log('>>> user should not be signed in - invalid password >>>>>> ', res);
  // });

  // models['user'].login({email:'xyz@example.com', password:'1234456'}).then(function(res){
  //   console.log('>>> user email should not be found >>>>>> ', res);
  // });

  // models['user'].login({username:'admin', password:'1234'}).then(function(res){
  //   console.log('>>> user should not be found >>>>>> ', res);
  // });

  // models['user'].login({username:'admin', password:'1234456'}).then(function(res){
  //   console.log('>>> user should not be signed in - invalid password >>>>>> ', res);
  // });

  // models['user'].login({username:'xyz', password:'1234456'}).then(function(res){
  //   console.log('>>> user should not be found >>>>>> ', res);
  // });
}

setTimeout(doTest, 500);