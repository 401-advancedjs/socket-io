'use strict';

const socketIOClient = require('socket.io-client');

const events = require('./util/events.js');
const constants = require('./util/constants.js');
const {readFile, upperCase, writeFile} = require('./modules/read-write.js');

const socket = socketIOClient.connect(constants.SERVER_URL + constants.PORT);

async function alterFile(file){
  const read = await readFile(file);
  const upperCaseValue = upperCase(read);
  const write = await writeFile(file, upperCaseValue);
  socket.emit(events.FILE_SAVED_EVENT, write);
}

let file = process.argv.slice(2).shift();
alterFile(file).catch(error => {
  socket.emit(events.FILE_ERROR_EVENT, error);
});
