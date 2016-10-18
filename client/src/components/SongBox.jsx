var React = require('react');
var SongTable = require('./SongTable');
var SongRow = require('./SongRow');
var Header = require('./SongHeader');

var SongBox = React.createClass({
  getInitialState:function(){
    return { songs: [] }
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    var self = this;
    request.onload = function(){
      var jsonString = request.responseText;
      var songs_data = JSON.parse(jsonString);
      self.setState({ songs: songs_data.feed.entry }) 
       // could also use a bind here instead of saving this to var self above
    }
    request.send();
  },

  render: function(){
    return(
      <div className='songs-box'>
        <Header title="UK Top 20"/>
        <SongTable songs={this.state.songs}/>
      </div>
    )
  }
})



module.exports = SongBox;