'use strict';

const fs = require('fs');
const util = require('util');

const readFile = (file) => {
    return util.promisify(fs.readFile)(file)
};

const upperCase = (data) => {
    return data.toString().toUpperCase();
};

const writeFile = (file, data) => {
    return util.promisify(fs.writeFile)(file, data)
        .then( () => 'Message saved')
};

module.exports = {readFile, upperCase, writeFile};

