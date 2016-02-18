
'use strict';

const React = require('react');

/** @component
 * Generic container to fetch and throw
 * API data.
 */
const Component = React.createClass({

  propsTypes: {
    children: React.Prototypes.func.isRequired
  },

  getInitialState: function(){
    var tok = this.props.token || null;
    return {
      data: []
    };
  },

  componentDidMount: function(){
    var data = JSON.parse(document.querySelector('[data-react-api=' + this.props.token + ']').innerHTML);
    this.setState({data: data});
  },

  render: function(){
    return this.props.children(this.state.data);
  }

});

module.exports = Component;