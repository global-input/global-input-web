import React from 'react'

import {styles} from "./styles";
import TopHeaderSection from "../../../page-components/top-header-section";

export  default class BasicLayout extends React.Component {
render() {
    return (
            <div style={styles.content} id="topContent">
                    <TopHeaderSection  selected={this.props.selected}/>
                    {this.props.children}
            </div>
            );
  }
}
