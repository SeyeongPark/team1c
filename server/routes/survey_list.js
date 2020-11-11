let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let surveyController = require('../controllers/survey');

router.get('/', surveyController.displaySurveyList);

module.exports = router;