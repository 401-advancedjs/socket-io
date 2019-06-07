'use strict';

/**
 * Reads specified file, converts text to uppercase, rewrites file
 * @module read-write.js
 * */
const fs = require('fs');
const util = require('util');

/**
 * Read the file
 * @function readFile
 * @param {string} file path
 * */
const readFile = (file) => {
  return util.promisify(fs.readFile)(file);
};

/**
 * Converts text to uppercase
 * @function upperCase
 * @param {buffer} data to be converted
 * */
const upperCase = (data) => {
  return data.toString().toUpperCase();
};

/**
 * Rewrites file
 * @function writeFile
 * @param {string} file path
 * @param {string} data to be written
 * */
const writeFile = (file, data) => {
  return util.promisify(fs.writeFile)(file, data)
    .then( () => 'Message saved');
};

module.exports = {readFile, upperCase, writeFile};

