# [react-api](https://github.com/nickzuber/react-api)
[![Build Status](https://travis-ci.org/nickzuber/react-api.svg?branch=master)](https://travis-ci.org/nickzuber/react-api) [![npm version](https://badge.fury.io/js/react-api.svg)](https://badge.fury.io/js/react-api)

A simple tool for fetching and handling data from an API with React

## Installation

Installing [react-api](https://github.com/nickzuber/react-api) in your Node project is simple:

```
$ npm install react-api --save
```

## Usage

At its core, [react-api](https://github.com/nickzuber/react-api) is really just a simple React component. You would treat it as you would any other React component, with a few specific settings to keep in mind while configuring:

 - **ref** - *string* - Used to reference the component getting the API response.
 - **url** - *string* - The address of where you're getting your API response.
 - **callback** - *function* - A function for handling the actual response.

## Examples

Here is a basic example of using [react-api](https://github.com/nickzuber/react-api) to get some data of a GitHub user's repositories:

````javascript
const ReactAPI = require('react-api');

// The address of where to retrieve data
var URL = 'https://api.github.com/users/nickzuber/repos';

const MyAwesomeComponent = React.createClass({

  handleResponse: function(){
    // API response as a JavaScript object:
    console.log(this.refs.github.state.data);
  },

  render: function(){
    return(
      <div>
        <ReactAPI ref='github' url={URL} callback={this.handleResponse} />
      </div>
    );
  }

});

````

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2015 Nick Zuber
