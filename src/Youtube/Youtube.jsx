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

    state = {
        playerObj : ''
    }

    videoOnReady (event) {
        // access to player in all event handlers via event.target
        const player = event.target
        //set video to play at a certain time
        player.seekTo(50)
        console.log(event.target)
      }
      videoOnPlay (event) {
        // access to player in all event handlers via event.target
        // event.target.playVideoAt(50) // 50 seconds
        const player = event.target
        console.log(player.getCurrentTime())
      }
      videoStateChange (event) {
        const player = event.target
        console.log(player.getCurrentTime())
      }
    
    //   componentWillUnmount () {
    //     const {playerObj} = this.state
    //     // saves the time the user was at inthe video when leaving page, can be sent to back end, store, DB etc.
    //     console.log(player.getCurrentTime())
    //   }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        const {videoId} = this.props;
        return (
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={this.videoOnReady}
                onPlay={this.videoOnPlay}
                onStateChange={this.videoStateChange}
            />
        );
    }
}

export default YoutubeDemo;