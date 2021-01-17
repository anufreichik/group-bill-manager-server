import User from './Model';
import { get } from 'lodash';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export default function userCreate(req, res) {
  const userId = new mongoose.Types.ObjectId();
  const email = get(req, 'body.email', '').trim().toLowerCase();
  const password = get(req, 'body.password', '');

  User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({message: "Email exists!"});
        } else {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({error: err});
            } else {
              const user = new User({
                _id: userId,
                email:email,
                password: hash
              });
              user
                  .save()
                  .then(result => {
                    console.log(result);
                    res.status(200).json({message: "User created"});
                  })
                  .catch(err => {
                    console.log(err);
                    res.status(400).json({error: err});
                  });
            }
          });
        }
      });
}
