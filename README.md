# @meanie/mongoose-update-denormalized

[![npm version](https://img.shields.io/npm/v/@meanie/mongoose-update-denormalized.svg)](https://www.npmjs.com/package/@meanie/mongoose-update-denormalized)
[![node dependencies](https://david-dm.org/meanie/mongoose-update-denormalized.svg)](https://david-dm.org/meanie/mongoose-update-denormalized)
[![github issues](https://img.shields.io/github/issues/meanie/mongoose-update-denormalized.svg)](https://github.com/meanie/mongoose-update-denormalized/issues)
[![codacy](https://img.shields.io/codacy/400e8324a71d4410b9dc3980b5f8cdea.svg)](https://www.codacy.com/app/meanie/mongoose-update-denormalized)


A plugin for Mongoose to normalize JSON output

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `yarn` or `npm`.

```shell
#yarn
yarn add @meanie/mongoose-update-denormalized

#npm
npm install @meanie/mongoose-update-denormalized --save
```

## Usage

Setup as a global plugin for all Mongoose schema's:

```js
const mongoose = require('mongoose');
const updateDenormalized = require('@meanie/mongoose-update-denormalized');

mongoose.plugin(updateDenormalized);
```

Or for a specific (sub) schema:

```js
const mongoose = require('mongoose');
const updateDenormalized = require('@meanie/mongoose-update-denormalized');
const {Schema} = mongoose;

const MySchema = new Schema({});
MySchema.plugin(updateDenormalized);
```

This plugin exposes a static method to update denormalized data:

```js
const User = mongoose.model('User');
const {_id, name, region} = location;
await User.updateDenormalized('location', _id, {name, region});
```

This would update the `name` and `region` properties on the denormalized `location`
property on users, for the given matching location ID.

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [@meanie/mongoose-update-denormalized issue tracker](https://github.com/meanie/mongoose-update-denormalized/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Sponsor

This package has been kindly sponsored by [Hello Club](https://helloclub.com?source=meanie), an [all in one club and membership management solution](https://helloclub.com?source=meanie) complete with booking system, automated membership renewals, online payments and integrated access and light control. Check us out if you happen to belong to any kind of club or if you know someone who helps run a club!

## License

(MIT License)

Copyright 2016-2020, Adam Reis
