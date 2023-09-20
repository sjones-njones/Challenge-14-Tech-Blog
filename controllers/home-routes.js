// makes models available to this file
const router = require('express').Router();
const { User } = require('../models');

// render login page
router.get('/login', (req, res) => {
  if (req.session.logged_In) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// makes router available in other files
module.exports = router;