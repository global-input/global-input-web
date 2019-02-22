import React from 'react';
import TopHeaderSection from "../top-header-section";
import {styles} from "./styles";
import {applicationPathConfig} from "../page-templates";
import MediaPlayerControlExample from "../examples/media-player-control-example";
export default class MediaPlayerScreen extends React.Component{
  static pagePath="/global-input-app/video-player"
  render(){
    return(
      <React.Fragment>
        <TopHeaderSection menus={applicationPathConfig.menus} selected={this.props.selected}/>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <MediaPlayerControlExample/>
            </div>
        </div>
      </React.Fragment>

    );

  }

}
