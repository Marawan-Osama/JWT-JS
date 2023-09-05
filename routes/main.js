const {login, dashboard} = require('../controllers/main');
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth');

router.post('/login', login);
router.get('/dashboard', authMiddleware, dashboard);

module.exports = router;