import React from 'react';
import TopHeaderSection from "../../../page-components/top-header-section";


import MediaPlayerControlExample from "../../../examples/media-player-control-example";
import {config} from "../../../configs";
export default class MediaPlayerScreen extends React.Component{
  render(){
    return(
      <React.Fragment>
        <TopHeaderSection selected={this.props.selected}/>
        <MediaPlayerControlExample url={config.url}/>
      </React.Fragment>

    );

  }

}
