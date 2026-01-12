import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
export default mongoose.models.Login || mongoose.model("Login", UserSchema);
