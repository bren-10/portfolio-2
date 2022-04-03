import Mongoose from 'mongoose'
import Tangent from '../../../models/tangentModel';

export default async function handler(req, res) {

  Mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  try {
    const tangentList = await Tangent.find()
    if (tangentList.length > 0){
      res.status(200).send({"data": tangentList})
    } else {
      res.status(401).send('No Tangents')
    }
  } catch (err) {
    res.status(400).send('Error')
  }
  
}