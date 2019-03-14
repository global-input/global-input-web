import React from 'react';
import {Link} from 'react-router-dom';

import {styles,images} from './styles';
import examples from "../examples";

export default class PrinterApp extends React.Component{

  render(){
    console.log("****:"+examples.links.qrPrinting);
        return(<Link to={examples.links.qrPrinting} style={styles.card.link}>{this.props.children}</Link>);
  }
}
