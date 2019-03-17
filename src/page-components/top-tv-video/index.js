import React from 'react';
import AutoPlayVideo from "../../components/auto-play-video";
import {styles, images} from './styles';

import {withResponsiveComponent} from '../../../components/screen-media';

const TopTVVideo=props=>(
      <div style={styles.tv.container.get()}>
            <div styles={styles.tv.inner}>
                <img src={images.computer} style={styles.tv.img}/>
              <div style={styles.tv.screen}>
                <AutoPlayVideo video={props.video} muted={true}/>
              </div>
            </div>
      </div>
    );
const ResponsiveTopTVVideo=withResponsiveComponent(TopTVVideo);
export default ResponsiveTopTVVideo;
