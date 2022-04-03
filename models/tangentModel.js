import mongoose from 'mongoose';
const { Schema } = mongoose;

const tangentSchema = new Schema({
  title:  String,
  body:   String,
  date: String
});

const Tangent = mongoose.models.Tangent || mongoose.model("Tangent", tangentSchema)

export default Tangent