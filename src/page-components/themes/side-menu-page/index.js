import React from 'react';

import {withResponsiveComponent} from '../../../components/screen-media';
import {styles} from './styles';

import Page,{Paragraph,Title,ListLinks,TextLink,ALink,CodeContent, Concept,FirstSection,NextSection,Title2,Diagram} from './Page';

const theme={Page,
                  P:Paragraph,
                  Title,
                  Title2,
                  ListLinks,
                  Link:TextLink,
                  A:ALink,
                  Code:CodeContent,
                  Concept, FirstSection,NextSection,Diagram};



const DisplayContent=props=>{
                    return (
                          <React.Fragment>
                                  {props.Items.map((Item, index)=>(
                                          <React.Fragment key={index}>
                                              <div id={Item.menu.id} key={index} style={styles.bookmark}/>
                                              <Item  theme={theme}/>
                                          </React.Fragment>

                                  ))}
                        </React.Fragment>


  )};


const DeskTopSideMenu=props=>(

  <Page>
      <div style={styles.desktopMenu.container}>
            <div style={styles.desktopMenu.sideMenu.menu.get()}>
                          {props.Items.map((Item, index)=>(
                                  <div style={styles.desktopMenu.sideMenu.menuItem} key={index}>
                                    <a onClick={()=>props.gotoContent(Item.menu)}>  {Item.menu.label}</a>
                                  </div>
                          ))}

            </div>
            <div style={styles.desktopMenu.content.get()} id="scrollableContent">
                  <DisplayContent {...props}/>
            </div>
        </div>
    </Page>
  );
  const MobileSideMenu=props=>(
    <Page>
        <div style={styles.mobileMenu.container}>
              <div style={styles.mobileMenu.sideMenu}>
                  <div style={styles.mobileMenu.icon}>
                      <a onClick={props.closeMenu}>&times;</a>
                  </div>
                  <div style={styles.mobileMenu.menu}>
                                {props.Items.map((Item, index)=>(
                                        <div style={styles.mobileMenu.menuItem} key={index}>
                                          <a onClick={()=>props.gotoContent(Item.menu)}>  {Item.menu.label}</a>
                                        </div>
                                ))}

                  </div>
              </div>
              <div style={styles.mobileMenu.content.get()} id="scrollableContent" onClick={props.closeMenu}>
                    <DisplayContent {...props}/>
              </div>
          </div>
      </Page>
    );


  const MobileMenuIcon=props=>(
    <Page>
        <div style={styles.closedMenu.container}>
              <div style={styles.closedMenu.icon.container}>
                <a style={styles.closedMenu.icon.symbol} onClick={props.openMenu}>&#9776;</a>
              </div>
              <div style={styles.closedMenu.content} id="scrollableContent">
                  <DisplayContent {...props}  onClick={props.closeMenu}/>
               </div>
        </div>

    </Page>
  );





class  SideMenuPage  extends React.Component{
  constructor(props){
      super(props);
      this.state={menuOpen:false};
      this.openMenu=this.openMenu.bind(this);
      this.closeMenu=this.closeMenu.bind(this);
      this.gotoContent=this.gotoContent.bind(this);
  }
  openMenu(){
    this.setState({menuOpen:true});
  }
  closeMenu(){
    this.setState({menuOpen:false});
  }

  componentDidMount() {
          const hashParts = window.location.hash.split('#');
          if(hashParts && hashParts.length>1){
              this.processScrollTo(hashParts[1]);
          }
   }

   render(){
            if(this.props.screenMedia.biggerThan(800)){
              return (<DeskTopSideMenu {...this.props} gotoContent={this.gotoContent} closeMenu={this.closeMenu}/>);
            }
            else if(this.state.menuOpen){
              return (<MobileSideMenu {...this.props} gotoContent={this.gotoContent} closeMenu={this.closeMenu}/>);
            }
            else{
              return (<MobileMenuIcon {...this.props}  openMenu={this.openMenu}/>);
            }


    }
    gotoContent(menu){
        this.processScrollTo(menu.id);
    }
    processScrollTo(elementId){
              if(!elementId){
                return;
              }
              var elmnt = document.getElementById(elementId);

              if(elmnt){
                  window.scrollBy({top: -70,behavior: "smooth"});
                  console.log("elementId:"+elementId+":"+elmnt.id);
                  setTimeout(()=>elmnt.scrollIntoView(),400);


              }
              else{
                console.log("not found")
              }
    }
}

export default withResponsiveComponent(SideMenuPage);
