import React from 'react';
import TopHeaderSection from "../../../top-header-section";
import {styles} from "./styles";

import ContentTransferExample from "../../../examples/content-transfer-example";
export default class ContentTransferScreen extends React.Component{  
  render(){
    return(
      <React.Fragment>
        <TopHeaderSection selected={this.props.selected}/>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <ContentTransferExample/>
            </div>
        </div>
      </React.Fragment>

    );

  }

}
