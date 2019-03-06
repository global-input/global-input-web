import React from 'react';
import TopHeaderSection from "../../top-header-section";
import {styles} from "./styles";
import {applicationPathConfig} from "../../page-templates";
import ContentTransferExample from "../../examples/content-transfer-example";
export default class ContentTransferScreen extends React.Component{
  static pagePath="/global-input-app/content-transfer"
  render(){
    return(
      <React.Fragment>
        <TopHeaderSection menus={applicationPathConfig.menus} selected={this.props.selected}/>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <ContentTransferExample/>
            </div>
        </div>
      </React.Fragment>

    );

  }

}
