import Mongoose from "mongoose";
import Tangent from "../../../models/tangentModel";

export default async function handler(req, res) {
  const tangentData = req.body;

  Mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const tangent = await Tangent.create(tangentData);
    console.log(tangent)
    res.status(200).send('Success')
  } catch (err) {
    res.status(400).send('Error')
  }
}