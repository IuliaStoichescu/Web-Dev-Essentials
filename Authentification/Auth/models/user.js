const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: [true, 'Username cannot be blank']
   },
   password: {
      type: String,
      required: [true, 'Password cannot be blank']
   },
})

userSchema.statics.findAndValidate = async function (user, pw) {
   const findUser = await this.findOne({ user });
   const valid = await bcrypt.compare(pw, findUser.password);
   return valid ? findUser : false;
}

userSchema.pre('save', async function (next) {//function pre save 
   if (!this.isModified('password')) return;
   this.password = await bcrypt.hash(this.password, 12);
})

module.exports = mongoose.model('User', userSchema);