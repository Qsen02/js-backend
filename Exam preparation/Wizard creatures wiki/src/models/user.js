const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    collation: {
        locale: "en",
        strength: 2
    }
})

const Users = mongoose.model("Users", userSchema);

module.exports = {
    Users
}