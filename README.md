# @reis/mongoose-update-denormalized

[![npm version](https://img.shields.io/npm/v/@reis/mongoose-update-denormalized.svg)](https://www.npmjs.com/package/@reis/mongoose-update-denormalized)
[![github issues](https://img.shields.io/github/issues/adamreisnz/mongoose-update-denormalized.svg)](https://github.com/adamreisnz/mongoose-update-denormalized/issues)


A plugin for Mongoose to normalize JSON output

## Installation

You can install this package using `yarn` or `npm`.

```shell
#yarn
yarn add @reis/mongoose-update-denormalized

#npm
npm install @reis/mongoose-update-denormalized --save
```

## Usage

Setup as a global plugin for all Mongoose schema's:

```js
import mongoose from 'mongoose'
import {updateDenormalized} from '@reis/mongoose-update-denormalized'

//Global plugin
mongoose.plugin(toJson)
```

Or for a specific (sub) schema:

```js
import mongoose from 'mongoose'
import {updateDenormalized} from '@reis/mongoose-update-denormalized'
const {Schema} = mongoose

//Define schema
const MySchema = new Schema(/* ... */})

//Apply plugin
MySchema.plugin(updateDenormalized)
```

This plugin exposes a static method to update denormalized data:

```js
const User = mongoose.model('User')
const {_id, name, region} = location
await User.updateDenormalized('location', _id, {name, region})
```

This would update the `name` and `region` properties on the denormalized `location`
property on users, for the given matching location ID.

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [mongoose-update-denormalized issue tracker](https://github.com/adamreisnz/mongoose-update-denormalized/issues).

## License

(MIT License)

Copyright 2016-2023, Adam Reis
