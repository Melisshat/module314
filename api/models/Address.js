/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    numRue: {
      type: 'string',
      minLength: 1,
      maxLength: 4,
      required: true
    },
    rue: {
      type: 'string',
      minLength: 5,
      required: true,
    },
    ville: {
      type: 'string',
      minLength: 6,
      required: true
    },
    codePostal: {
      type: 'string',
      minLength: 4,
      maxLenght: 10,
      required: true
    },
    owner:{
      model: 'user'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          cb();
        }
      });
    });
  }
};

