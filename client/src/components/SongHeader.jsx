var React = require('react')

var SongHeader = function(props){
    return(
      <div className='header'>
        {props.title}
      </div>
    )
}

module.exports = SongHeader