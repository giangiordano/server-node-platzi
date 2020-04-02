
// Importaciones del server
const express = require('express');
const app = express(); // Express es una libreria de node para facilitar la comunicaciones
const server = require('http').Server(app);

const config = require('./config');
const cors = require('cors');
const socket = require('./socket');
const bodyParser = require('body-parser');
const router = require('./network/router');
const db = require('./db');

db(config.database);

app.use(cors);
app.use(bodyParser.json()); // Hay que especificarle a bodyParser con que se quiere trabajar. Aqui colocamos JSON.
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server); // Inicializamos Sockets server
router(app); // Importamos el archivo donde están todas las rutas

app.use('/api', express.static('api')); // Servimos una carpeta publica para el app - Los archivos estaticos html, css...

server.listen(config.port, () => {
  console.log(`[server up] http://localhost:${config.port}`);
});
 