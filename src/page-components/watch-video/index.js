import React from 'react';

import {styles,images} from './styles';

export default props=>(
      <div style={styles.watchVideo.get()}>
          <a href={props.video} target="_blank">
            <img src={props.image}/>
          </a>
      </div>
    );
