import React from 'react';
import LighBlueBackground from '../ligh-blue-background';
import {styles} from './styles';




const SideMenu=props=>(
      <div style={styles.sideContainer.get()}>
          <div style={styles.sideMenu.get()}>
                {props.Items.map((Item, index)=>(
                        <div style={styles.menuItem} key={index}>
                        <a onClick={()=>props.gotoContent(Item.menu)}>  {Item.menu.label}</a>
                        </div>
                ))}
          </div>
      </div>
);
const DisplayContent=props=>(
      <div style={styles.contentContainer.get()} id="scrollableContent">
                {props.Items.map((Item, index)=>(
                        <Item key={index} theme={LighBlueBackground}/>
                ))}

      </div>
);

export default class  extends React.Component{
    render(){
          return(
            <LighBlueBackground.Page>
                  <div style={styles.topcontainer.get()}>
                      <SideMenu {...this.props} gotoContent={this.gotoContent.bind(this)}/>
                      <DisplayContent {...this.props}/>
                  </div>
            </LighBlueBackground.Page>
          );
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
