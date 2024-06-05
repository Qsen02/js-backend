let bcrypt = require("bcrypt");
const { Users } = require("../models/users");

async function register(email, password) {
    let hashedPassword = await bcrypt.hash(password, 10);
    let user = new Users({ email, password: hashedPassword });
    await user.save();
    return user;
}

async function login(email, password) {
    let user = await Users.findOne({ email }).lean();
    let isValidPass = await bcrypt.compare(password, user.password);
    console.log(isValidPass);
    if (!user || !isValidPass) {
        return false;
    }
    return user;
}

module.exports = {
    register,
    login,
}