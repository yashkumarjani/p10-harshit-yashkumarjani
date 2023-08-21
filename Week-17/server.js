require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const weatherAPIRoutes = require('./routes/weather-api');

const app = express();

app.use(bodyParser.json());

app.use('/',weatherAPIRoutes);


app.listen(process.env.PORT,()=>console.log(`Server is running on port: http://localhost:${process.env.PORT}`));