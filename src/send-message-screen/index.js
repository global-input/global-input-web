import React from 'react';
import TopHeaderSection from "../top-header-section";
import {styles} from "./styles";
import {applicationPathConfig} from "../page-templates";
import SendMessageExample from "../examples/send-message-example";
export default class SendMessageScreen extends React.Component{
  static pagePath="/global-input-app/message-sender"

  render(){
    return(
      <React.Fragment>
        <TopHeaderSection menus={applicationPathConfig.menus} selected={this.props.selected}/>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <SendMessageExample {...this.props}/>
                
            </div>
        </div>
      </React.Fragment>

    );

  }

}
