'use strict'; 
const route = require('./manager/routesManager');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http, { origins: '*:*'});

const taskController = require('./controller/routesController');

app.use(cors());
app.use(express.static(path.join(__dirname + 'controller')));  

io.on('connection', (client) => {

    client.on('task-data', function(data) {
        console.log(data);
    });

});

http.listen(3002); 



module.exports = io;