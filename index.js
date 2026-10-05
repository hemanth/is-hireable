'use strict';
var ghUser = ((m) => (m && m.default) ? m.default : m)(require('gh-user'));
module.exports = async user => (await ghUser(user)).hireable
