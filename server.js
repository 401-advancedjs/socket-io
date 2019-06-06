'use strict';
/**
 * Listens for events, signals appropriate clients
 * @module server.js
 * */

const events = require('./util/events.js');
const QServer = require('@nmq/q/server');

QServer.start();

const database = new QServer('database');

database.monitorEvent(events.CREATE);
database.monitorEvent(events.UPDATE);
database.monitorEvent(events.DELETE);
database.monitorEvent(events.READ);
database.monitorEvent(events.DB_ERROR);

const files = new QServer('files');

files.monitorEvent(events.FILE_SAVED_EVENT);
files.monitorEvent(events.FILE_ERROR_EVENT);

console.log('Server is up');

//starter code
// const socketIO = require('socket.io')(constants.PORT);
// const constants = require('./util/constants.js');

// socketIO.on('connection', socket => {
//   console.log('Socket Connected: ', socket.id);
//   socket.on(events.FILE_SAVED_EVENT, message => {
//     socket.broadcast.emit(events.RECEIVED_SAVE_EVENT, message);
//   });
//   socket.on(events.FILE_ERROR_EVENT, error => {
//     socket.broadcast.emit(events.FILE_ERROR_EVENT, error);
//   });
// });
