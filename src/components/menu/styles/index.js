import {config} from "../../../configs";

export const styles={
  header: function(applicationId){

    var ret= {
        position:"fixed",
        width:"100%",
        height:80,
        display:"flex",
        flexDirection: "row",
        backgroundColor: "#F5047A",
        zIndex:100
    };
    if(!styles.mql.matches){
      ret.width="100vw";
    }

    return ret;
  },
  titleContainer:function(){
    var ret={
      display:"flex",
      flexDirection: "row",
      marginLeft:40
    };
    if(styles.mql.matches){
        ret.marginLeft=1;
    }
    return ret;
  },
  mql:window.matchMedia(`(min-width: 800px)`),
  topnav: {
    overflow: "hidden",
    paddingRight:30,
    paddingTop:10,
    width:"100%",
    display:"flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor:"#EEEEEE"
  },
  topnavmobile: {
    overflow: "hidden",
    paddingRight:30,
    paddingTop:10,
    width:"100%",
    display:"flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#EEEEEE"
  },

  appTitleContainer:{
    marginLeft:10,
    paddingTop:5
  },
  appTitle:{
    fontFamily: "GiorgioSans-Regular",
    fontSize: 25,
    fontWeight:400,
    color: "#4880ED",
    whiteSpace: "nowrap",
    boxSizing: "inherit"
  },
  appVersion:{
    fontFamily: "GiorgioSans-Regular",
    fontSize: 12,
    color: "#4880ED",
    marginLeft:10
  },
  subtitleContaier:{
      display:"flex",
      flexDirection:"row",
      fontFamily: "GiorgioSans-Regular",
      color: "#4880ED",
  },
  userinfo:{
    position:"absolute",
    right:0,
    top:10,
    marginRight:20,
    color: "#80ccff",
  },
  mobileMenu:{
     position:"absolute",
     left:0,
     top:0
  },
  mobileMenuIcon:{
    fontWeight: 'normal',
    fontSize:40,
    color: "#4880ED",
    fontStyle: 'normal',
  },
  mobileMenuOverlay:{
    position:"absolute",
      left:0,
      top:0,
      width:"100%",
      height:window.innerHeight,
      backgroundColor:"rgba(8,88,88, 0)",
      zIndex:0


  },
  menuItems:function(){
    const isMobile=!styles.mql.matches;
    if(isMobile){
        return{
          position:"absolute",
          display:"flex",
          flexDirection:"column",
          left:0,
          top:0,
          backgroundColor:"white",
          boxShadow: "10px 10px 5px #888888",
          zIndex:1000,
        };

    }
    else{
      return{
          position:"absolute",
          display:"flex",
          flexDirection:"row",
          right:0,
          top:24
      };
    }


  },
  menuItem:function(isSelected,hover){
    const isDesktop=styles.mql.matches;
    var ret= {
      float: "left",
      display: "block",
      textAlign: "center",
      padding: "8px 16px",
      textDecoration: "none",
      fontSize: 17,
      marginBottom: 0,
      fontFamily:"Gobold Thin",
      color: "#4880ED",
      whiteSpace:"nowrap"
    };
    if(isDesktop){
        ret.borderTopRightRadius=10;
        ret.borderTopLeftRadius=10;
        ret.marginBottom=10;
        ret.color="#4880ED";
    }
    else{
        ret.color="#4880ED";
        ret.textAlign="left";
    }
    if(isSelected){
      ret.color="white";
      ret.backgroundColor="#4880ED";
    }
    else if(hover){
      ret.backgroundColor="#D8D0ED";
      ret.color="#5C5A5B";
    }




    return ret;
  },
  content:{
    position:"absolute",
    marginTop:90,
    width:"100%",
    padding:20


  },

  logo:{
    maxWidth:80,
    marginLeft:20,
    marginBottom:4
  }

};
