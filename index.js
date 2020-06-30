'use strict';

/**
 * Helper to update denormalized data
 */
module.exports = function updateDenormalized(schema) {
  schema.statics.updateDenormalized = function(prop, _id, data, isArray) {

    //Prepare patch
    const patch = {};
    for (const key in data) {
      const patchKey = isArray ? `${prop}.$[].${key}` : `${prop}.${key}`;
      patch[patchKey] = data[key];
    }

    //Array of ID's
    if (Array.isArray(_id)) {
      _id = {$in: _id};
    }

    //Update
    return this.updateMany({[`${prop}._id`]: _id}, patch);
  };
};
