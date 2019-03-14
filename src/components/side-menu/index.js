import React from 'react';

import {styles} from './styles';
export default class SideMenu extends React.Component{

  render(){
      return(
        <div style={styles.topcontainer.get()}>
            <div style={styles.sideContainer.get()}>
                <div style={styles.sideMenu.get()}>
                        {this.props.menus.map(this.renderMenuItem.bind(this))}
                </div>
            </div>
            <div style={styles.contentContainer.get()} id="scrollableContent">
                {this.props.children}
            </div>
        </div>

      );
  }
  renderMenuItem(menu, index){
      return(
          <div style={styles.menuItem} key={index}>
          <a onClick={()=>this.gotoContent(menu)}>  {menu.label}</a>

          </div>
      )
  }
  gotoContent(menu){
      this.processScrollTo(menu.id);
  }
  processScrollTo(elementId){

            var elmnt = document.getElementById(elementId);
            if(elmnt){
                window.scrollBy({top: -70,behavior: "smooth"});
                elmnt.scrollIntoView();

            }
            else{
              console.log("not found")
            }




  }


}
SideMenu.defaultProps={
      menus:[{label:"menu number 1"},{label:"menu number 2"}]

}
