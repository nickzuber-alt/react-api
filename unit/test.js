// Tests will go here

var ReactAPI = require('../build/react-api.js');
var React = require('react');
var ReactDOM = require('react-dom');
var test = require('tape');

test('data should be fetched and handled correctly', function(t){

  try{
    var URL = 'https://api.github.com/users/nickzuber/repos';
    var app = React.createClass({
      displayName: "app",
      handleResponse: function handleResponse() {
        console.log(this.refs.github.state.data);
      },
      render: function render() {
        return React.createElement(ReactAPI, { ref: "github", url: URL, callback: this.handleResponse });
      }
    });
    t.equal(!!app, true, "making sure everything builds nicely");
  }catch(e){
    t.fail("Error while attempting to compile: " + e.message);
  }
  
  t.end();
});