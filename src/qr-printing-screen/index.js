import React from 'react';
import TopHeaderSection from "../top-header-section";
import {applicationPathConfig} from "../page-templates";
import {styles} from "./styles";
import QRCodeprintingExample from "../examples/qr-code-printing-example";

export default class QRPrintingScreen extends React.Component{
  static pagePath="/global-input-app/qr-printing"
  render(){

    return(
      <React.Fragment>
        <div className="noprint">
          <TopHeaderSection menus={applicationPathConfig.menus} selected={this.props.selected}/>
        </div>
        <div style={styles.content}>
            <div style={styles.itemSection}>
                <QRCodeprintingExample {...this.props}/>
            </div>
        </div>
      </React.Fragment>

    );


  }

}
