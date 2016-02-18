
'use strict';

const React = require('react');
//const request = require('./request.js');
const md5 = require('../tools/crypto.js');
const Component = require('./component.jsx');

const react_api = React.createClass({

  getInitialState: function(){
    return {
      data: null
    };
  },

  dataReady: function(){
    console.log(this.state.data);
  },

  prepareData: function(data){
    this.setState({
        data: data
      }, this.dataReady);
    console.log('prepareData function has fired and api data has just been set');
  },

  render: function(){
    var token = md5(Math.random().toString());
    return(
      <div>parent
        <Component
          token={token}
          prepareData={this.prepareData}
        />  
      </div>
    );
  }

});

module.exports = react_api;