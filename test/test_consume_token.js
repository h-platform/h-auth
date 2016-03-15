var chai = require('chai');
var expect = require('chai').expect;
var foo = 'bar';
var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

var models = require('../models');

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);

function doTest() {
  models['user'].consumeActivationToken('6Ckebq5pa4xv7sndbAGxaV3sjsUlI08yPCLQDswbFpFupVx9xZdX9NOMpam6HT558YKGNGcJi2oVIla9Q7JRcBliSStQlgRuL3X4miqI2CUWjY3GarYCErOiJ2mzJ27K');
}

setTimeout(doTest, 500);