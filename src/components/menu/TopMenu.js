import React, {Component} from 'react'

import {
  Link
} from 'react-router-dom'

import {styles} from "./styles";


export  default class TopMenu extends Component {
  constructor(props){
      super(props);
      this.state={menuPressed:false};
      this.mediaQueryChanged=this.mediaQueryChanged.bind(this);
  }
  componentWillMount(){

    styles.addMediaListener(this.mediaQueryChanged);

  }
  componentWillUnmount() {
    styles.removeMediaListener(this.mediaQueryChanged);
  }
  mediaQueryChanged(){
      this.forceUpdate();

  }


  menuPressed(){
      this.setState(Object.assign({},this.state,{menuPressed:!this.state.menuPressed}));
  }
  setMenuPressed(menuPressed){
      this.setState(Object.assign({},this.state,{menuPressed}));
  }
  renderMenuItem(menu,index){
      return(<MenuItem  menu={menu} selected={this.props.selected} key={index}/>);
  }
  renderMobileMenuItems(){
         return(<div style={styles.menuItemsMobile}>{this.props.menus.map(this.renderMenuItem.bind(this))}</div>
             );
  }
  renderDesktopMenuItems(){
    return(<div style={styles.menuItems}>{this.props.menus.map(this.renderMenuItem.bind(this))}</div>
        );

  }

  renderMobileMenuPressed(){
    return (
               <div style={styles.topnavmobileMenuPressed}>
                       <div style={styles.mobileMenuOverlay} onClick={(evt)=>{
                             this.setMenuPressed(false);
                           }}>
                       </div>
                      <img src={this.props.appLogo} style={styles.logo}/>
                      <div style={styles.appTitleContainer}>
                              <div style={styles.appTitle}>{this.props.appTitle}</div>
                      </div>
                      {this.renderMobileMenuItems()}


               </div>
            );
  }
renderNarrowMobileMenuNotPressed(){
  return (
             <div style={styles.topnavmobile}>
                     <div style={styles.mobileMenu}>
                        <a style={styles.mobileMenuIcon} onClick={this.menuPressed.bind(this)}>&#9776;</a>
                    </div>
                    <div style={styles.appTitleContainer}>
                            <div style={styles.appTitle}>{this.props.appTitle}</div>
                    </div>
             </div>
          );
}
  renderMobileMenuNotPressed(){
    return (
               <div style={styles.topnavmobile}>
                       <div style={styles.mobileMenu}>
                          <a style={styles.mobileMenuIcon} onClick={this.menuPressed.bind(this)}>&#9776;</a>
                      </div>
                      <img src={this.props.appLogo} style={styles.logo}/>
                      <div style={styles.appTitleContainer}>
                              <div style={styles.appTitle}>{this.props.appTitle}</div>
                      </div>
               </div>
            );
  }
  renderDeskTop(){
    return (
               <div style={styles.topnav}>
                    <img src={this.props.appLogo} style={styles.logo}/>
                    <div style={styles.appTitleContainer}>
                            <div style={styles.appTitle}>{this.props.appTitle}</div>
                    </div>
                    {this.renderDesktopMenuItems()}

               </div>
            );
  }
  render() {
      if(styles.isDesktop()){
        return this.renderDeskTop();
      }
      else{          
          if(this.state.menuPressed){
              return this.renderMobileMenuPressed();
          }
          else if(styles.isNarrowMobile()){

              return this.renderNarrowMobileMenuNotPressed();
          }
          else{
              return this.renderMobileMenuNotPressed();
          }
      }
  }
}




class MenuItem extends Component{
  constructor(props){
    super(props);
    this.state={hover:false}
  }
  onHover(){
    this.setState({hover: true})
  }
  offHover(){
    this.setState({hover: false})
  }
  render(){

    var link=this.props.menu.link;
    if(!link){
      link="/";
    }
    var linkText=this.props.menu.linkText;
    var isSelected=this.props.selected && this.props.menu.link===this.props.selected.link;



        return(
          <Link to={link} style={styles.menuItem(isSelected, this.state.hover)}
            onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.offHover.bind(this)}>
                {linkText}
          </Link>
        );



  }
}
