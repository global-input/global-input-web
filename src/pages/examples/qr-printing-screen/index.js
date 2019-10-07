import React from 'react';
import TopHeaderSection from "../../../page-components/top-header-section";

import {styles} from "./styles";
import QRCodeprintingExample from "../../../examples/qr-code-printing-example";
import {config} from "../../../configs";

export default class QRPrintingScreen extends React.Component{
  render(){

    return(
      <React.Fragment>
        <div className="noprint">
          <TopHeaderSection  selected={this.props.selected}/>
        </div>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <QRCodeprintingExample {...this.props} url={config.url}/>
            </div>
        </div>
      </React.Fragment>

    );


  }

}
