var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/rem ...');
test('rem', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

assert.deepEqual(ubique.rem([13,-7],2.2),[2,-0.39999999999999947]);
assert.deepEqual(ubique.rem([13,-7],[5,6]),[3,-1]);
assert.deepEqual(ubique.rem(a,b),[[0,0,0],[3,3,-1]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->