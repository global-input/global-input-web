import React from 'react';
import TopHeaderSection from "../top-header-section";
import {styles} from "./styles";
import {applicationPathConfig} from "../page-templates";
import TransferFormDataExample from "../examples/transfer-form-data-example";
export default class TransferFormDataScreen extends React.Component{
  static pagePath="/global-input-app/transfer-form-data"
  render(){
    return(
      <React.Fragment>
        <TopHeaderSection menus={applicationPathConfig.menus} selected={this.props.selected}/>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <TransferFormDataExample {...this.props}/>
            </div>
        </div>
      </React.Fragment>

    );

  }

}
