const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        
        default: 0
    },
    weight: {
        type:Number,
        default: 0
    },
    goal: {
        type: String,
        default:''
        
    },
    target:{
        type:Number,
        default:0
    }


}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;