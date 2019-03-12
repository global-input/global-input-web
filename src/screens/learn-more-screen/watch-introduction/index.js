import React from 'react';

import {styles,images} from './styles';


    const videos={
        shortNoVoice:"https://media.iterativesolution.co.uk/video/short-part-intro.mp4",
        full:"https://www.youtube.com/watch?v=HzeTY1TA4V8"
    };



export default class WatchIntroduction extends React.Component{

  render(){
    return(
      <div style={styles.video}>
          <a href={videos.full} target="_blank">
            <img src={images.videoIcon}/>
          </a>
      </div>
    );
  }


}
