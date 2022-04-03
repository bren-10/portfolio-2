import { withIronSessionApiRoute } from 'iron-session/next'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import User from '../../models/userModel'

export default withIronSessionApiRoute(
  async function handler(req, res) {
    const pw = req.body.password

    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    try {
      const all = await User.find({});
      bcrypt.compare(pw, all[0].password, async function(err, result) {
        if (result) {

          req.session.user = all[0];
          await req.session.save();
          res.status(200).send('Success')
        } else {
          res.status(401).send('Error')
        }
      })
    } catch (err) {
      console.log(err)
      res.status(400).send('Error')
    }

    
  },
  {
    cookieName: "bren10cookie",
    password: process.env.COOKIE_PW,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      maxAge: undefined, // Should clear the cookie data and automatically log me out when closing the browser.
      secure: !process.env.NEXT_PUBLIC_IN_PRODUCTION,
    },
  },
);