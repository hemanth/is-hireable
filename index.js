'use strict';
var ghUser = require('gh-user');
module.exports = function (user, cb) {
	if (typeof user !== 'string') {
		throw new TypeError('Expected a string');
	}
	if (typeof cb !== 'function') {
		throw new TypeError('Expected a function');
	}
	ghUser(user, function (err, info) {
    if(!err) {
			cb(null,info.hireable);
		} else {
			cb(err,null);
		}
	});
};
