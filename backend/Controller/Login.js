const database = require('../Database/db');
const users = require('../Model/Signup');

const userLogin = async (req, res) =>{
    try {
        const logindata = await users.find({email: req.body.email});
        if(logindata.length !== 0){
            if(req.body.password === logindata[0].password){
                res.status(200).json({success: true, message: 'you are logged in successfully'})
            }else{
                res.status(400).json({success: false, message: 'please enter correct password'})
            }
        }else{
            res.json({success: false, message: 'user not found, try signing up'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = userLogin;