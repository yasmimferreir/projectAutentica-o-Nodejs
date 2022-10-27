const express = require('express');
const app = express();
require('dotenv').config();

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = process.env.PORT || 3030

//importando o router para o index
const routes = require('./routes/routes')
app.use(routes)

app.listen(port, () => console.log(
    `Server started in http://localhost:${port} or ${protocol}://${ip}:${port}`
))