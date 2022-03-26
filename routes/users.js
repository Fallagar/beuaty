const express = require('express');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const router = express.Router({mergeParams: true});
const User = require('../models/user');
const passport = require('passport');

router.get('/register', (req, res) => (
    res.render('users/register')
))

router.post('/register', catchAsync(async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        console.log(registeredUser);
        req.flash('success', 'Thank you for joining!');
        res.redirect('/campgrounds');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/register')
    }
    
}))

router.get('/login', (req, res) => {
    res.render('users/login')
});
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/user/login'}), (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect('/campgrounds');
});
module.exports = router;
