
'use strict';

const req = require("request");

/* @exampleOptions

options = {
  url: 'https://api.github.com/users/nickzuber/repos',
  headers: {
    'User-Agent': 'nickzuber'
  }
}

*/

/**
 * @param {Function} the callback function which handles the API data
 * @param {Object} options for response
 * @return {void|Error} callback function is fired on success or error thrown on failure
 */
const request = function(handler, options){
  req(options, function(error, response, body){
    if(error){
      throw new Error('Error occurred while fetching API data: ' + error.message);
    }
    handler(body);
  });
 }

 module.exports = request;