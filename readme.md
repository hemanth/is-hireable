# is-hireable [![Build Status](https://travis-ci.org/hemanth/is-hireable.svg?branch=master)](https://travis-ci.org/hemanth/is-hireable)

> Can I hire this github user?


## Install

```
$ npm install --save is-hireable
```


## Usage

```js
var isHireable = require('is-hireable');

isHireable(user, function (err,hireable) {
	if (err) throw new Error(err);
	console.log(hireable ? "YES!": "NO");
});
```


## API

### isHireable(<github_user_name>, <callback>)

## CLI

```sh
$ is-hireable
Is github user hireable

Usage
  $ echo <github_user_name> | is-hireable
  $ hireable <github_user_name>

Example
  $ is-heireable hemanth
  YES!

  $ echo "passy" | is-heireable
  NO
```

## License

MIT © [](http://h3manth.com)
