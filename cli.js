#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var isHireable = require('./index');
var input = process.argv[2];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ echo <github_user_name> | is-hireable');
	console.log('  $ hireable <github_user_name>');
	console.log('');
	console.log('Example');
	console.log('  $ is-heireable hemanth');
	console.log('  true');
}

function init(user) {
	isHireable(user, function (err,hireable) {
		if (err) throw new Error(err);
		console.log(hireable ? "YES!": "NO");
	});
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}
	init(input);
} else {
	process.stdin.once('data', function (data) {
		init(data.toString());
	});
}
