'use strict';
var assert = require('assert');
var isHireable = require('./');

it('should be hierable', function (done) {
	isHireable('hemanth')
		.then(res => { assert.strictEqual(res, true); done(); })
});
