import mongoose, { Model, Schema, loadClass } from 'mongoose';
import bcrypt from 'bcryptjs';

const schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

class Account extends Model {
  generateHash(password) {
    return bcrypt.hashSync(password, 8);
  }

  validateHash(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

schema.loadClass(Account);


// Account.methods.generateHash = password => {
  
// };

// Account.methods.validateHash = password => {
//   console.log(Account);
//   return false;
//   // 
// };

export default mongoose.model("account", schema);