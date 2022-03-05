const usersCtrl = {}
const User = require('../models/User');

usersCtrl.renderSignUpForm = (req,res) => {
    res.render('users/signUp');
};

usersCtrl.signUp = async (req,res) => {
    const errors = [];
    const {name,email,password,confirm_password} = req.body;
    if (password != confirm_password) {
        errors.push({text: 'Passwords do not match'});    
    } 
    
    if (password.length < 6) {
        errors.push({text: 'Passwords must be at least 6 characters'});
    }

    if (errors.length > 0) {
        res.render('users/signUp', {
            errors,
            name, 
            email //,password,confirm_password
        });
    } else {
        // Look for email coincidence
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg', 'The email is already in use');
            res.redirect('/users/signUp');
        } else {
            // Saving a New User
            const newUser = new User({name, email, password}); // = name:name,email:email,pass:pass
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'You are registered');
            res.redirect('/users/signIn');
        }
    }
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