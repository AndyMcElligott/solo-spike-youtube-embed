import React, { Component } from 'react';
// import youtube similiar to how React:
// npm install react-youtube
import YouTube from 'react-youtube';

// from share link:
// https://youtu.be/_nBlN9yp9R8

// youtube URL:
// https://www.youtube.com/watch?v=_nBlN9yp9R8

// video id: nBlN9yp9R8

class YoutubeDemo extends Component {

    videoOnReady(event) {
        event.target.pauseVideo()
        console.log(event.target)
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        const {videoId} = this.props
        return (
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={this.videoOnReady}
            />
        );
    }
}

export default YoutubeDemo;