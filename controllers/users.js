const User = require('../models/user');

module.exports.registerUserForm = (req, res) => {
    res.render('users/register')
};

module.exports.registerUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Thank you for joining!');
            res.redirect('/campgrounds');
        });
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/register')
    }
    
};

module.exports.loginForm = (req, res) => {
    res.render('users/login')
};

module.exports.logout = (req, res) => {
    req.logout();
    req.flash('success', 'Logged you out');
    res.redirect('/');
};

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back!');
    let { returnTo = '/' } = req.session;
    if (returnTo.includes('reviews')) {
        returnTo = returnTo.slice(0, returnTo.indexOf('reviews'));
    }
    delete req.session.returnTo;
    console.log(`return set to: ${returnTo}`)
    res.redirect(returnTo);
};