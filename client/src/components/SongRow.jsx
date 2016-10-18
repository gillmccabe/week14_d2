var React = require('react')

var SongRow = function(props){
    return(
      <div className='song-row'>
        <h3>{props.song['im:name'].label}</h3>
        <h4>{props.song['im:artist'].label}</h4>
        <img src={props.song['im:image'][2].label} />
      </div>
    )
}


module.exports = SongRow;
