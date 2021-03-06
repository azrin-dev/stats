const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passportLocalMongoose = require('passport-local-mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new mongoose.Schema({
   
   // Login Info
   date: {
      type: Date,
      default: Date.now()
   },
   email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true 
   },
   name: {
      type: String,
      lowercase: true,
      trim: true    
   },
   handphone: {
      type: Number,
      trim: true
   },
   phoneCode:{
      type: Number,
      trim: true
   },
   birthday: Date,
   address: {
      type: String,
      lowercase: true,
      trim: true    
   },
   address2: {
      type: String,
      lowercase: true,
      trim: true    
   },
   city: {
      type: String,
      lowercase: true,
      trim: true    
   },
   state: {
      type: String,
      lowercase: true,
      trim: true    
   },
   postcode: {
      type: Number,
      trim: true
   },
   country: {
      type: String,
      lowercase: true,
      trim: true    
   },
   image: {
      type: String,
      lowercase: true,
      trim: true   
   },

   // Business Info
   company: {
      type: String,
      lowercase: true,
      trim: true    
   },

   // Administrative info
   admin: {
      type: Boolean,
      default: false
   },   
   terms: {
      type: Boolean,
      default: false
   },  
   authenticated: {
      type: Boolean,
      default: false
   },
   authToken: {
      type: String
   },
   authTokenExpire: {
      type: Date
   },
   token: {
      type: String
   }
},
{
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

// Make sure the email is unique
userSchema.plugin(passportLocalMongoose, {
   usernameField: 'email', 
   usernameLowerCase: true,
   usernameUnique: true
});
userSchema.plugin(mongodbErrorHandler);

// Generate JSON web token
userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      username: this.username,
      email: this.email,
      admin: this.admin,
      exp: parseInt(expiry.getTime() / 1000),
    }, process.env.MY_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('User', userSchema);