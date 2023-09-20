const router = require('express').Router();

// connects the controller files
const userRoutes = require('./user-routes');

// sets up api routes
router.use('/users', userRoutes);

// makes route available in other files
module.exports = router;