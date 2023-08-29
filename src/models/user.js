const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    adress: String,
    phone_number:Number,
    birthdate:String,
    password:String
});

const user = mongoose.model("user", userSchema)

module.exports = user;