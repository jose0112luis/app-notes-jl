const usersCtrl = {}
const User = require('../models/User');

usersCtrl.renderSignUpForm = (req,res) => {
    res.render('users/signup');
};

usersCtrl.signUp = (req,res) => {
    res.send('sign up');
};

usersCtrl.renderSignInForm = (req,res) => {
    res.render('users/signIn');
};

usersCtrl.signIn = (req,res) => {
    res.send('sing inn');
};

usersCtrl.logOut = (req,res) => {
    res.send('log out');
};

module.exports = usersCtrl;