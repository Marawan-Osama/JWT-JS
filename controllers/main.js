const {BadRequestError} = require('../errors');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const {username, password} = req.body;


    if(!username || !password){
        throw new BadRequestError('Please provide email and password');
    }

    //dummy id, normally provided by DB
    const id = new Date().getDate();
    //smaller payload = better, dont put sensitive data in payload. This will be sent to frontend
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn: '30d'})

    res.status(200).json({msg:"user created", token, user: username});
};

const dashboard = async (req, res) => {

    console.log(req.user);

    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({msg: `Hello ${req.user.username}`, 
    secret: `Here is your secret number ${luckyNumber}`});
}

module.exports = {login, dashboard};