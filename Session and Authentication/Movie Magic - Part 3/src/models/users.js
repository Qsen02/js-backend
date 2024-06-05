let mongoose = require("mongoose");

let usersSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

let Users = mongoose.model("Users", usersSchema);

module.exports = {
    Users
}