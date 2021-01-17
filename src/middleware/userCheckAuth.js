import jwt from 'jsonwebtoken';
const dotenv = require('dotenv');
const userCheckAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        req.userData = jwt.verify(token, process.env.JWT_KEY); // decoded JWT key
        next();
    } catch (error) {
        return res.status(401).json({message: 'Auth failed'});
    }
};

export default userCheckAuth;