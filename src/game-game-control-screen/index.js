import React from 'react';
import TopHeaderSection from "../top-header-section";
import {styles} from "./styles";
import {applicationPathConfig} from "../page-templates";
import GameControlExample from "../examples/game-control-example";
export default class GameControlScreen extends React.Component{    
  render(){
    return(
      <React.Fragment>
        <TopHeaderSection menus={applicationPathConfig.menus} selected={this.props.selected}/>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <GameControlExample/>
            </div>
        </div>
      </React.Fragment>

    );

  }

}
