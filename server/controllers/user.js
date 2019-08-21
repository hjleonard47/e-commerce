const User = require('../models/user');

const signin = (req, res) => {
    // const user = users.find(user => user.email == email && user.password == password);
    
    // if (user) {
    //     return 'Signed in successful.';
    // }

    // return 'Signin failed.';

    res.send("Sign in");
};

const signup = (req,res) => {
    // users.push({
    //     id: user.id,
    //     firstname: user.firstname,
    //     lastname: user.lastname,
    //     type: user.type,
    //     gender: user.gender,
    //     timestamp: user.timestamp,
    //     email: user.email,
    //     password: user.password
    // });
    // return 'Signup successful.';
    res.send("Sign up");
};

const getUserById = (req,res) => {
    res.send("User");
};

module.exports.signin = signin;
module.exports.signup = signup;
module.exports.getUserById = getUserById;