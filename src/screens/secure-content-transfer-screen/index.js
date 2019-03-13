import React from 'react';
import {Link} from 'react-router-dom'

import {styles,images} from './styles';
import TopHeaderSection from "../../top-header-section";

import SecureTransferData from './SecureTransferData';

export default class  SecureFormDataTrabsferScreen extends React.Component{
  static pagePath="/global-input-app/secure-transfer"

  constructor(props){
    super(props);
    this.onWindowResize=this.onWindowResize.bind(this);
  }
   componentDidMount() {
       window.addEventListener("resize", this.onWindowResize);

   }


   componentWillUnmount() {
       window.removeEventListener("resize", this.onWindowResize);
   }
   onWindowResize(){
      this.forceUpdate();
   }

  render(){
      return(
        <div style={styles.container}>
        <TopHeaderSection/>
        <div style={styles.scrollContent.get()}>
                  <SecureTransferData/>

            </div>

        </div>
      )

  }


}
