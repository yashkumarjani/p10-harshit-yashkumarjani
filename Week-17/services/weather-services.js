require("dotenv").config();
const axios = require('axios');
const api_key = process.env.API_KEY;

exports.getCurrentWeatherService = async (city) => {
  try {

    let response = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
    return response;
  } catch (error) {
    return json({ error: error.message });
  }
};

exports.getCurrentWeatherForMultipleDaysServices = async (city,daysCount) => {
  try {
    let response = await axios(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${daysCount}&appid=${api_key}`
        );
    return response;
  } catch (error) {
    return json({ error: error.message });
  }
};