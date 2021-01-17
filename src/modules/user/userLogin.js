import User from './Model';
import bcrypt from 'bcrypt';
import {get} from "lodash";
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

export default function userLogin(req, res) {
    const email = get(req, 'body.email', '').trim().toLowerCase();
    const password = get(req, 'body.password', '');

    User.find({ email: email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({message: "Auth failed"});
            }
            //checking password reverse
            console.log(password, user[0].password);
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({message: "Auth failed"});
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        },
                        process.env.JWT_KEY,
                        {expiresIn: process.env.JWT_EXPIRES_IN}
                    );
                    return res.status(200).json({message: "Auth successful", token: token});
                }
                res.status(401).json({message: "Auth failed"});
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
