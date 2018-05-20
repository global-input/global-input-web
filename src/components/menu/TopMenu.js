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

  renderMenuItem(menu,index){
      var key=index+"_"+menu.label;
      return(<MenuItem  menu={menu} selected={this.props.selected} key={key}/>);
  }

  renderDesktopMenuItems(){
    return(<div style={styles.menuItems}>{this.props.menus.map(this.renderMenuItem.bind(this))}</div>
        );

  }





  renderDeskTop(){
    return (
              <div style={styles.topnavContainer}>
                   <div style={styles.topnav}>
                        <img src={this.props.appLogo} style={styles.logo}/>
                        <div style={styles.appTitleContainer}>
                                <div style={styles.appTitle}>{this.props.appTitle}</div>
                        </div>
                        {this.renderDesktopMenuItems()}

                   </div>
                </div>
            );
  }
  renderMobile(){
    return(
    <div style={styles.topnavContainer}>
          <div style={styles.topnavmobile}>
                 <img src={this.props.appLogo} style={styles.logo}/>
                 <div style={styles.appTitleContainer}>
                         <div style={styles.appMobileTitle}>{this.props.appTitle}</div>
                 </div>
                 <div style={styles.mobileMenu}>
                    <a style={styles.mobileMenuIcon} onClick={this.menuPressed.bind(this)}>&#9776;</a>
                </div>
          </div>
          {this.renderMobileMenuItems()}
    </div>
  );
  }
  renderMobileMenuItems(){
       if(this.state.menuPressed){
         return(<div style={styles.menuItemsMobile}>{this.props.menus.map(this.renderMenuItem.bind(this))}</div>);
       }
       else{
         return null;
       }

  }
  render() {

      if(styles.isDesktop()){
        return this.renderDeskTop();
      }
      else{
        return this.renderMobile();
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
