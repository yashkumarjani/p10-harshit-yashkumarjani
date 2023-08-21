const {
    getCurrentWeatherService,
    getCurrentWeatherForMultipleDaysServices,
  } = require("../services/weather-services");


exports.getCurrentWeather =  async (req, res) => {
    try {
        const { city } = req.params;

        let response = await getCurrentWeatherService(city);
        let weather =`Mostly ${response.data.weather[0].description} today`
        let temperature= `The Temerature in ${city} is ${Math.floor((response.data.main.temp)-273.15)} Degree Celsius`;
        let pressure = `${response.data.main.pressure}hpa`;
        let humidity = `${response.data.main.humidity}%`;
        let wind = `Speed ${response.data.wind.speed} Deg ${response.data.wind.deg}`
        res.status(200).json({
            success: true,
            message: "Fetch done",
            weather,temperature,pressure,humidity,wind
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};


exports.getCurrentWeatherForMultipleDays =  async (req, res) => {

    try {
        const city = req.params.city;
        const daysCount = req.params.dayscount;

        let response = await getCurrentWeatherForMultipleDaysServices(city,daysCount);

        let dayscount = response.data.cnt;

        let temperature = [];
        let pres = [];
        let hum =[];
        let visi=[];
        for(let i=0; i<daysCount;i++){
            temperature.push(Math.floor((response.data.list[i].main.temp)-273.15));
            pres.push(response.data.list[i].main.pressure);
            hum.push(response.data.list[i].main.humidity);
            visi.push(response.data.list[i].visibility);

        }

        let temp = `The temerature for the next ${dayscount} days in ${city} is ${temperature} degree Celsius`
        let pressure = pres;
        let humidity= hum;
        let visibility=visi;


        res.status(200).json({
            success: true,
            message: "Fetch done",
            temp,pressure,humidity,visibility
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};