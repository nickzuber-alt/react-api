
'use strict';

const React = require('react');
const request = require('./request.js');
const md5 = require('CryptoJS').MD5;
const Component = require('./component.js');

const react_api = React.createClass({

  getInitialState: function(){
    return {
      data: null
    };
  },

  readyData: function(data){
    this.setState({
      data: data
    })
  },

  render: function(){
    return(
      <div>
        <Component token={md5(Math.random())}>
          {(childState) => {
            // other things
          }}
        </Component>
      </div>
    );
  }

});