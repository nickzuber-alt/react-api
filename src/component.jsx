
'use strict';

const React = require('react');

/** @component
 * Generic container to fetch and throw
 * API data.
 */
const Component = React.createClass({

  props: {
    prepareData: React.PropTypes.func.isRequired
  },

  componentDidMount: function(){
    console.log(this.props.token);
    var data = {
      "error":"Something went wrong when trying to locate the data.",
      "token":this.props.token
    };
    
    if(!!document.querySelector('[data-react-api="' + this.props.token + '"]')){
      data = JSON.parse(document.querySelector('[data-react-api=' + this.props.token + ']')).innerHTML;
    }
    
    console.log('about to send data to parent');
    this.props.prepareData(data);
  },

  render: function(){
    return(
      <div>
        child
      </div>
    );
  }

});

module.exports = Component;