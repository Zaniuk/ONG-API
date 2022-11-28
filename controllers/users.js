const { User, Role } = require("../models");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT
const SECRET = String(process.env.TOKEN_SECRET)
const registerUser =  async (req, res, _next) => {
    
    const { firstName, lastName, email, password, roleId, image } = req.body;
    if (firstName && lastName && email && password ) {
      const userExist = await User.findOne({ where: { email: email } });
      if (userExist) {
        res.status(403).send("User already exist");
      } else {
        const hashPassowrd = bcrypt.hashSync(password, Number(saltRounds))
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashPassowrd,
          image: image || 'https://via.placeholder.com/150',
          roleId: roleId || 2,
        });
        newUser.save();
        const token = jwt.sign({newUser}, SECRET, {expiresIn: '2d'}) 
        
        res.status(200).send({
          Authorization: token,
          user: newUser
        }).end();
      }
    } else {
      res.status(403).send("Please fill all fields");
    }
  }

  const loginUser = async (req, res, _next) => {
    const { email, password } = req.body;
    if(email && password) {
      const user = await User.findOne({where: {email: email}})
      if(user) {
        const isValidUser = bcrypt.compareSync(password, user.password)
        if(isValidUser){

          const token = jwt.sign({user}, SECRET, {expiresIn: '2d'}) 
          res.status(200).send({
            Authorization: token,
            user: user
          }).end();
        }else{
          res.status(400).send('Password is wrong')
        }
      }else{
        res.status(400).send('Email not found')
      }
    }
  }

  const authenticateUser = async (req, res, _next) => {
    const authorization = req.headers['Authorization'] || req.headers['authorization']
    if(authorization){
      const token = authorization.split('Bearer ')[1]
      try {
        const user = jwt.verify(token, SECRET)
        res.status(200).send({
          user: user.user || user.newUser,
          Authorization: token
        })
      } catch (error) {
        
        res.status(400).send({
          error: error, 
          message: 'Not valid token'
        })
      }
    }else{
      res.status(400).send('Error: token not found')
    }
  }
const getUsers = async (req, res, _next) => {
  const users = await User.findAll()
  res.send(users)
}
const getUser = async(req, res, _next) => {
  try {
	const {id} = req.params
	  const user = await User.findOne({
	    where:{
	      id: id
	    }
	  })
    res.status(200).send(user)
} catch (error) {
	res.status(404).send('User not found')
}
}
  module.exports = {
    registerUser,
    loginUser,
    authenticateUser,
    getUsers, 
    getUser
  };