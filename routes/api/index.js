const router = require('express').Router();
const userRoutes = require('./users');
const thoughtsRoutes = require('./thoughts');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;