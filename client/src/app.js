var React = require('react');
var ReactDOM = require('react-dom');

var SongBox = require('./components/SOngBox.jsx')

window.onload = function(){
  ReactDOM.render(
    <SongBox></SongBox>,
    document.getElementById('app')
  );
}
