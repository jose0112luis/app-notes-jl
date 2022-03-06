const { Router } = require('express');
const router = Router();
const { renderSignUpForm, signUp, renderSignInForm, signIn, logOut } = require('../controllers/users.controller');


router.get('/users/signUp', renderSignUpForm);

router.post('/users/signUp', signUp);

router.get('/users/signIn', renderSignInForm);

router.post('/users/signIn', signIn);

router.get('/users/logOut', logOut);

module.exports = router;