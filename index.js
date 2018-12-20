'use strict';
var ghUser = require('gh-user');
module.exports = async user => (await ghUser(user)).hireable
