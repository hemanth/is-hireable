'use strict';
var assert = require('assert');
var isHireable = require('./');

it('should be hierable', function () {
	isHireable('hemanth',function(err,status){
		assert.strictEqual(status, true);
	});
});
