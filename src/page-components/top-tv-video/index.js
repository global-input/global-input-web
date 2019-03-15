import React from 'react';
import AutoPlayVideo from "../../components/auto-play-video";
import {styles, images} from './styles';
import AdjustableComponent from '../../../components/adjustable-component';
export default class TopTVVideo extends AdjustableComponent{
    return(
      <div style={styles.tv.container.get()}>
            <div styles={styles.tv.inner}>
                <img src={images.computer} style={styles.tv.img}/>
              <div style={styles.tv.screen}>
                <AutoPlayVideo video={props.video} muted={true}/>
              </div>
            </div>
      </div>
    );
  }
