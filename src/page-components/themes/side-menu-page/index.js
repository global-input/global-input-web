import React from 'react';

import {styles} from './styles';
import Page,{Paragraph,Title,ListLinks,TextLink,ALink,CodeContent, Concept,FirstSection,NextSection} from './Page';

const theme={Page,
                  P:Paragraph,
                  Title,
                  ListLinks,
                  Link:TextLink,
                  A:ALink,
                  Code:CodeContent,
                  Concept, FirstSection,NextSection};



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
                        <div id={Item.menu.id}>
                          <Item key={index} theme={theme}/>
                        </div>
                ))}

      </div>
);

export default class  extends React.Component{
    render(){
          return(
            <Page>
                  <div style={styles.topcontainer.get()}>
                      <SideMenu {...this.props} gotoContent={this.gotoContent.bind(this)}/>
                      <DisplayContent {...this.props}/>
                  </div>
            </Page>
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
