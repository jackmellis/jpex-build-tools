console.log('Setting npm user token');

const token = process.env.NPM_TOKEN;
const utils = require('npm-utils');
utils.setAuthToken();
