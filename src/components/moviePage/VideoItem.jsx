import React from 'react'
import YouTube from 'react-youtube';

function VideoItem(props) {

  const opts = {
    height: '230',
    width: '360',
    playerVars: {
        'autoplay': 0,
        'controls': 0,
        'autohide': 1,
        'wmode': 'opaque',
        'origin': 'http://localhost:8100' 
    },
  };

  return (
    <div 
          className='
            video-container
            overflow-hidden
            !px-0
            rounded-2xl
            shadow-lg
            relative
            !w-[360px]
            !h-[230px]
            ml-10
    '>
        <YouTube videoId={props.video.videoPath} opts={opts} className="w-full h-full" />
    </div>
  );
};

export default VideoItem