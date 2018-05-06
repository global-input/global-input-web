import React, {Component} from 'react'

import {
  Link
} from 'react-router-dom'

import {styles} from "./styles";


export  default class TopMenu extends Component {
  constructor(props){
      super(props);
      this.state={menuPressed:false, mql:styles.mql};
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


  menuPressed(){
      this.setState(Object.assign({},this.state,{menuPressed:!this.state.menuPressed}));
  }
  setMenuPressed(menuPressed){
      this.setState(Object.assign({},this.state,{menuPressed}));
  }

  render() {

    if(styles.mql.matches){

            return (
                       <div style={styles.topnav}>
                            <img src={this.props.appLogo} style={styles.logo}/>
                            <div style={styles.appTitleContainer}>
                                    <div style={styles.appTitle}>{this.props.appTitle}</div>
                            </div>

                            <ListMenuItems {...this.props} menuPressed={this.state.menuPressed}/>
                            <MobileMenuOverlayer {...this.props} menuPressed={this.state.menuPressed} setMenuPressed={this.setMenuPressed.bind(this)}/>

                       </div>
                    );



      }


    else{
      return (
                 <div style={styles.topnavmobile}>
                      <MobileMenuIcon menuPressed={this.menuPressed.bind(this)}/>
                      <ListMenuItems {...this.props} menuPressed={this.state.menuPressed}/>
                      <MobileMenuOverlayer {...this.props} menuPressed={this.state.menuPressed} setMenuPressed={this.setMenuPressed.bind(this)}/>
                        <img src={this.props.appLogo} style={styles.logo}/>
                        <div style={styles.appTitleContainer}>
                                <div style={styles.appTitle}>{this.props.appTitle}</div>
                        </div>


                 </div>
              );
      }
    }



}

class MobileMenuIcon extends Component{
  render(){
      if(styles.mql.matches){
        return null;
      }
      else{
          return (
             <div style={styles.mobileMenu}>
                <a style={styles.mobileMenuIcon} onClick={this.props.menuPressed}>&#9776;</a>
            </div>
          );
      }
  }
}

class ListMenuItems extends Component{

  renderMenu(menu,index){
      return(
         <MenuItem {...this.props} menu={menu} selected={this.props.selected} key={index}/>
      );
  }
  render(){
     if(styles.mql.matches || this.props.menuPressed){

       return(
           <div style={styles.menuItems()}>
                {this.props.menus.map(this.renderMenu.bind(this))}
            </div>

           );
     }
     else{
       return null;
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

        return(
          <Link to={link} style={styles.menuItem(this.props.menu.link===this.props.selected.link, this.state.hover)}
            onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.offHover.bind(this)}>
                {linkText}
          </Link>
        );



  }
}



class MobileMenuOverlayer extends Component{
  render(){
      if((!styles.mql.matche) && this.props.menuPressed){
        return(
          <div style={styles.mobileMenuOverlay} onClick={(evt)=>{
              this.props.setMenuPressed(false);
            }}>


          </div>
        );


      }
      else{
        return null;
      }
  }

}
