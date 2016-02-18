/*
 *  __________________________
 *
 *  Routing Configuration File
 *  __________________________
 *
 *  Here is where the routes to page files in
 *  the app are declared and defined. React apps
 *  are instantiated here and positioned into their 
 *  respective route. The React app is rendered down
 *  and piped into an .ejs page to be outputted.
 */

// Get dependencies 
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Get our React apps

module.exports = function(app){

  app.get('/', function(req, res){

    // Get React app
    const Index = React.createFactory(require('../modules/Index.jsx'));
    var renderedApp = ReactDOMServer.renderToString(Index({}));

    res.render('index', {
      reactOutput: renderedApp
    });

  });

}