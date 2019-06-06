'use strict';

/**
 * Starts event-driven process
 * @module app.js
 *
 * */

const QClient = require('@nmq/q/client');
const events = require('./util/events.js');
const {readFile, upperCase, writeFile} = require('./modules/read-write.js');


/**
 * Reads file, converts text to upper case, rewrites file
 * @function alterFile
 * @param {string} file path
 * */
async function alterFile(file){
  const read = await readFile(file);
  const upperCaseValue = upperCase(read);
  const write = await writeFile(file, upperCaseValue);
  QClient.publish('files', events.FILE_SAVED_EVENT, write);
}

let file = process.argv.slice(2).shift();
alterFile(file).catch(error => {
  QClient.publish('files', events.FILE_ERROR_EVENT, error);
});

//startercode
// const socketIOClient = require('socket.io-client');
// const constants = require('./util/constants.js');
// const socket = socketIOClient.connect(constants.SERVER_URL + constants.PORT);
// socket.emit(events.FILE_SAVED_EVENT, write);
// socket.emit(events.FILE_ERROR_EVENT, error);

