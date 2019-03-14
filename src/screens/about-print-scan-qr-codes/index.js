import React from 'react';
import TopHeaderSection from '../../top-header-section';
import {styles,images} from './styles';
import ContentEncryption from './ContentEncryption';
import ExportEncryptionKeys from './ExportEncryptionKeys';
import ExportAppSettings from './ExportAppSettings';
export default class AboutPrintScanQRCodes extends React.Component{
  constructor(props){
    super(props);
    this.onWindowResize=this.onWindowResize.bind(this);
  }
   componentDidMount() {
       window.addEventListener("resize", this.onWindowResize);

       this.processScrollTo('topContent');

   }


   componentWillUnmount() {
       window.removeEventListener("resize", this.onWindowResize);
   }
   onWindowResize(){
      this.forceUpdate();
   }

  render(){
        return(<div style={styles.container} id="topContent">
            <TopHeaderSection/>
            <div style={styles.content}>
                  <div style={styles.card.container.get()}>
                        <ContentEncryption/>
                        <ExportEncryptionKeys/>
                        <ExportAppSettings/>
                  </div>
            </div>
        </div>);
  }
  processScrollTo(elementId){
            var elmnt = document.getElementById(elementId);
            if(elmnt){
                window.scrollBy({top: -70,behavior: "smooth"});
                elmnt.scrollIntoView();
            }

  }
}
