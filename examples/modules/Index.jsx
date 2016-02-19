/*
 *  Index Page
 *
 *  Here is where the index/landing page is constructed
 *  and sent off to the app.bundle.js page to be processed
 *  and piped.
 *
 */

// Node components
const React = require('react');

// TESTING MODULE
const ReactAPI = require('./react-api.js');

const OPTIONS = {
  URL: 'https://api.github.com/users/nickzuber/repos'
}

// Construct React component
const app = React.createClass({

  handleResponse: function(){
    console.log('API response:');
    console.log(this.refs.github.state.data);
  },

  render: function(){
    return(
      <div>

        <ReactAPI ref='github' url={OPTIONS.URL} callback={this.handleResponse} />

      </div>
    );
  }

});

module.exports = app;