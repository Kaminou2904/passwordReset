const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {body} = require('express-validator');
const singupController = require('../Controller/Signup');
const userLogin = require('../Controller/Login');
const passReset = require('../Controller/Reset');
const app = express();
const PORT = 8989;

app.use(cors());

app.get('/', (req, res)=>{
    res.send('hello dosto');
});

app.use(bodyParser.json());
app.post('/signup',[
    body('email').isEmail().withMessage('enter a valid email'),
    body('number').isMobilePhone().withMessage('enter a valid number'),
    body('password').isLength({min:8}).withMessage('password must contain 8 characters')
    .matches(/\d/).withMessage('password must contain at least one digit')
    .matches(/[A-Z]/).withMessage('password must contain at least one uppercase letter')
    .matches(/[\W_]/).withMessage('password must contain at least one symbol')
], singupController);

app.post('/login', userLogin);
app.post('/reset', [
    body('number').isMobilePhone().withMessage('enter a valid number'),
    body('newpassword').isLength({min:8}).withMessage('password must contain 8 characters')
    .matches(/\d/).withMessage('password must contain at least one digit')
    .matches(/[A-Z]/).withMessage('password must contain at least one uppercase letter')
    .matches(/[\W_]/).withMessage('password must contain at least one symbol')
], passReset);

app.listen(PORT, ()=>{
    console.log('server started on port ', PORT);
});