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
  models['user'].generateActivationToken('admin@gmail.com');
}

setTimeout(doTest, 500);