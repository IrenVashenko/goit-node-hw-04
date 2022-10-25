const bcrypt= require("bcryptjs");

const {User} = require('../../mod/user');

const signup = async(req, res) => {
    const {name, email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        const error = new Error(`{email} in use`)
        error.status = 409;
        throw error;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await User.create({name, email, password: hashPassword});
    res.status(201).json({
        name: result.name,
        email: result.email,
    })
};

module.exports = signup;