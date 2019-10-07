import React from 'react';
import TopHeaderSection from "../../../page-components/top-header-section";
import {styles} from "./styles";

import TransferFormDataExample from "../../../examples/transfer-form-data-example";
import {config} from "../../../configs";
export default class TransferFormDataScreen extends React.Component{

  render(){
    return(
      <React.Fragment>
        <TopHeaderSection  selected={this.props.selected}/>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <TransferFormDataExample {...this.props} url={config.url}/>
            </div>
        </div>
      </React.Fragment>

    );

  }

}
