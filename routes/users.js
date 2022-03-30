const express = require('express');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const router = express.Router({mergeParams: true});
const passport = require('passport');
const user = require('../controllers/users')

router.route('/register')
    .get(user.registerUserForm)
    .post(catchAsync(user.registerUser));

router.route('/login')
    .get(user.loginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/user/login' }), user.login);

router.get('/logout', user.logout);



module.exports = router;
