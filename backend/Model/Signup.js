const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: Number, required: true},
    dateOfBirth: { type: Date, required: true },
    password: {type: String, required: true}
})

const users = mongoose.model('users', loginSchema);

module.exports = users;