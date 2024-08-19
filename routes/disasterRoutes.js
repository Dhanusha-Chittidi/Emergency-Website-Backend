const express = require('express');
const router = express.Router();
const disasterController = require('../controllers/disasterController');

router.post('/addDisaster', disasterController.addDisaster);
router.get('/getDisaster',disasterController.getDisaster);
router.get('/search',disasterController.search);
module.exports = router;