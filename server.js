const express = require('express');
const dotenv = require('dotenv'); 
const appConfig = require('./config/appConfig');
const db = require('./config/db');
const routes = require('./routes/index');

dotenv.config();

const app = express();
app.use(express.json()); // Middleware para analizar JSON
app.use('/', routes);

const PORT = appConfig.port;
const IP = appConfig.ip;

app.listen(PORT, IP, () => {
    console.log(`Servidor corriendo en http://${IP}:${PORT}`);
});
