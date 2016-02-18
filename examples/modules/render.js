/*
 *  ________________________
 *
 *  React App Rendering File
 *  ________________________
 *
 *  This is the page that renders the React app and
 *  loads React onto the client. This is necessary for
 *  React functionality on the DOM load.
 *
 *  JSON __data is taken from the current page and parsed
 *  for routing to the proper page.
 *
 */

const React = require('react');
const ReactDOM = require('react-dom');

// Default Paths
const Index = require('./Index.jsx');

// Attempting to grab mounting node
const mount = document.getElementById('app');

// If we can't find the mount node, we have to throw and exit
if(typeof mount === 'null'){
  throw new Error('Unable to find mounting node. Aborting render...');
}

ReactDOM.render(new React.createFactory(Index)({}), mount);