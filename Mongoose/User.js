const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 18,
    max: 65,
    validate: {
      validator: (val) => val > 18,
      message: "Age must be greater than 18",
    },
  },
  email: { type: String, required: true },
  created_at: { type: Date, default: Date.now, imutable: true },
  updated_at: { type: Date, default: Date.now },
  employees: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  tasks: [String],
  address: addressSchema,
});
userSchema.methods.getFullName = function () {
  return this.name + " " + this.age;
};
//middleware
userSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});
module.exports = mongoose.model("User", userSchema);
