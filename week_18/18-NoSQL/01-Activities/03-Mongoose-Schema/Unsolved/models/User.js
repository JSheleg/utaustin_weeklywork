const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  // Add these four attributes to your schema: username, password, email, userCreated
  username: {
    type: String,
    required: 'Username is Required',
    trim: true
  },
  password: {
    type: String,
    trim: true,
    required: 'You need a password',
    min: [6, "Your password needs to minimum of 6 characters"]
  },
  email: {
    type: String,
    unique: true,
    match:  /.+\@.+\..+/
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

});

const User = model('User', UserSchema);

module.exports = User;
