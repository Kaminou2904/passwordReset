const {validationResult} = require('express-validator');
const database = require('../Database/db');
const singupModel = require('../Model/Signup');

const singupController = async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.errors[0].msg)
        return res.status(400).json({errors:  errors.array()})
    }

    try{
        const newUser = new singupModel({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            password: req.body.password,
            dateOfBirth: req.body.dateOfBirth
        });
        await newUser.save();
        res.status(200).json({success: true});
    }catch(err){
        console.log(err);
        res.status(200).json({success: true});
    }
}

module.exports = singupController;