import React, {Component} from 'react'
import {textValues,images} from  "../configs";


import ReactMarkdown from "react-markdown";



import {styles} from "./styles";



export default class DisplayIntroduction extends Component{

  render(){
    return(
      <div style={styles.introduction}>
          {textValues.qrcode.content1.map((p,index)=>{return(<div className="ptext" key={index}>
          <ReactMarkdown source={p} />
          </div>);})}
      </div>

    );

  }
}
