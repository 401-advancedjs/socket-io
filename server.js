'use strict';

const events = require('./util/events.js');
const constants = require('./util/constants.js');
const socketIO = require('socket.io')(constants.PORT);

socketIO.on('connection', socket => {
    console.log('Socket Connected: ', socket.id);
    socket.on(events.FILE_SAVED_EVENT, message => {
        socket.broadcast.emit(events.RECEIVED_SAVE_EVENT, message);
    });
    socket.on(events.FILE_ERROR_EVENT, error => {
        socket.broadcast.emit(events.FILE_ERROR_EVENT, error);
    });
});
