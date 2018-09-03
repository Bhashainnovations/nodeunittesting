var romanNumber = require('../romanNumber');
var expect = require('chai').expect;
describe('romanNumber()', function () {
  it('Checking with Roman numbers', function () {
    var x = 1990;
    var sum1 = "MCMXC";
    var sum2 = romanNumber(x);
    expect(sum2).to.be.equal(sum1);

  });
});
