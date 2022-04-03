import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({_id: String, password:  String}, { collection: 'users' });

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User