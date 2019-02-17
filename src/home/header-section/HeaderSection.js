import React, {Component} from 'react'
import {styles} from "./styles";
import headerTextContent from "./headerTextContent";


var images={
  header:require('./global-input-app.png'),
  appStore:require('./app-store.png'),
  playStore:require('./play-store.png')
}


export  default class HeaderSection extends Component {

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
    renderHeaderItems(item,index){
        return(
          <li key={index}>
            {item}
          </li>
        );

    }
render() {

    return (
          <React.Fragment>
              <img src={images.header} style={styles.rightImage.get()}/>
              <div style={styles.headerSection.get()}>
                    <div style={styles.title.get()}>{headerTextContent.title}</div>
                  <div style={styles.listContent}>
                   <ul>
                      {headerTextContent.items.map(this.renderHeaderItems.bind(this))}
                  </ul>
                  </div>
                  <div style={styles.appSelection.get()}>
                      <div style={styles.appDescription}>
                          {headerTextContent.app.content}
                      </div>
                      <div style={styles.appDownload}>
                          <img src={images.appStore} style={styles.appStoreImage}/>

                          <img src={images.playStore} style={styles.appStoreImage}/>
                      </div>



                  </div>
              </div>
          </React.Fragment>
          );
  }
}
