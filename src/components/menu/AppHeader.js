import React, {Component} from 'react'

import {localImages,textValues,config} from "../../configs";
import {appdata} from "../../store";
import TopMenu from "./TopMenu";
import {styles} from "./styles";


export  default class AppHeader extends Component {
  constructor(props){
      super(props);
      this.state={mql:styles.mql};
      this.mediaQueryChanged=this.mediaQueryChanged.bind(this);
  }
  componentWillMount(){
    styles.mql.addListener(this.mediaQueryChanged);
  }
  componentWillUnmount() {
    styles.mql.removeListener(this.mediaQueryChanged);
  }
  mediaQueryChanged(){
    this.setState(Object.assign({}, this.state, {mql:styles.msql}));
  }

    render(){
      var userinfo=appdata.getUserInfo();
      var username="";
      if(userinfo){
        username=userinfo.username;
      }


        return (
            <div style={styles.header()}>
                    <div style={styles.titleContainer()}>
                            <img src={localImages.logo} style={styles.logo}/>
                             <div style={styles.appTitleContainer}>
                                  <div style={styles.appTitle}>{textValues.title()}</div>
                                  <div style={styles.subtitleContaier}>
                                        <div style={styles.appVersion}>v{config.version}</div>
                                        <div style={styles.userinfo}>{username}</div>
                                  </div>

                            </div>

                    </div>

                      <TopMenu selected={this.props.selected}/>



              </div>

        );

    }


}

AppHeader.styles=styles;
