import React from 'react';
import TopHeaderSection from "../../../top-header-section";
import GameControlExample from "../../../examples/game-control-example";
export default class GameControlScreen extends React.Component{
  static pagePath="/global-input-app/game-example"
  render(){
    return(
      <React.Fragment>
        <TopHeaderSection selected={this.props.selected}/>
        <GameControlExample/>
      </React.Fragment>

    );

  }

}
