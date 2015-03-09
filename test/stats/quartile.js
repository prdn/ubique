var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/quartile ...');
test('quartile', function (done) {

var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

assert.deepEqual(ubique.quartile(x),[0.002999999999999999,0.015,0.026]);
assert.deepEqual(ubique.quartile(ubique.cat(1,x,y)),[[0.002999999999999999,-0.03699999999999999],[0.015,0.017499999999999988],[0.026,0.058]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->