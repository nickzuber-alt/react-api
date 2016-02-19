
'use strict';

var React = require('react');
var md5 = require('../tools/crypto.js');

/** @component
 * @prop {string} url, where to get the data from
 * @prop {function} callback, what to do once we have that data
 */
var react_api = React.createClass({

  getInitialState: function(){
    // Validate props
    if(typeof this.props.callback !== 'function'){
      throw new TypeError("Expected props.callback to be a function");
    }
    if(typeof this.props.url !== 'string'){
      throw new TypeError("Expected props.url to be a string");
    }

    return {
      data: null
    };
  },

  componentDidMount: function(){
    var request = undefined;
    var target = this.props.url;

    if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
    }else{
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("GET", target, true);

    request.onreadystatechange = function(){
      if(request.readyState == XMLHttpRequest.DONE){
        if(request.status == 200){
          this.fetchData(request.responseText);
        }
        else{
          throw new Error("AJAX load failed: invalid status returned: " + request.status);
        }
      }
    }.bind(this);

    try{
      request.send();
    }
    catch(e){
      console.error("Error: Connection refused from " + target);
    }
  },

  fetchData: function(rawJSON){
    try{
      var data = JSON.parse(rawJSON);
    }
    catch(e){
      throw new Error("Error: AJAX response was failed to parse as JSON");
    }
    
    this.prepareData(data);
  },

  prepareData: function(data){
    this.setState({
        data: data
      }, this.dataReady);
  },

  dataReady: function(){
    this.props.callback(this.state.data);
  },

  render: function(){
    return(
      <div></div>
    );
  }

});

module.exports = react_api;