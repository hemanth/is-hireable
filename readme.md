# is-hireable [![Build Status](https://travis-ci.org/hemanth/is-hireable.svg?branch=master)](https://travis-ci.org/hemanth/is-hireable)

> Can I hire this github user?


## Install

```
$ npm install --save is-hireable
```


## Usage

```js
var isHireable = require('is-hireable');

(async () => {
    console.log(await isHireable('hemanth'));
    //=> 👍
})();
```


## API

### isHireable(<github_user_name>)

## CLI

```sh
$ is-hireable
Is github user hireable

Usage
  $ echo <github_user_name> | is-hireable
  $ hireable <github_user_name>

Example
  $ is-heireable hemanth
  👍

  $ echo "passy" | is-hireable
  👎
```

## License

MIT © [](http://h3manth.com)
