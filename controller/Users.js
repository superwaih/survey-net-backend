require('dotenv').config()
const User = require("../model/User")
const {StatusCodes} = require('http-status-codes')


const getAllUsers = async (req, res) =>{
    const users = await User.find({})
    res.status(200).json(users)
}


const createUser = async(req, res) =>{
    const {email, firstname, lastname} = req.body

    const user = await User.create(
        {"email": email,"firstname": firstname , "lastname": lastname }
    )

    res.status(201).json({
        payload: user,
        message:"user created successfully"
    })


}
const submitInformation = async (req, res) =>{
    const email = req.params.email
    const currentUser = await User.findOneAndUpdate({email: email}, {...req.body}, {returnOriginal: false})
    if(currentUser){
        res.status(200).json(currentUser)

    }else{
        res.status(404).json({
            msg: 'User not found'
        })
    }

}

module.exports = {
    getAllUsers, createUser, submitInformation
}