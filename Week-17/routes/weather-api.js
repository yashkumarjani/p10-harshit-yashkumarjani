const express = require('express');

const {getCurrentWeather,getCurrentWeatherForMultipleDays} = require("../controllers/controls");


const router = express.Router();


router.route("/weather/:city").get(getCurrentWeather);
router.route("/weather/:city/:dayscount").get(getCurrentWeatherForMultipleDays);



module.exports = router;