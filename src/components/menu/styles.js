
var styles={
  mql:window.matchMedia(`(min-width: 800px)`),
  narrowMobile:window.matchMedia(`(min-width: 350px)`),
  addMediaListener:function(listener){
    this.mql.addListener(listener);
    this.narrowMobile.addListener(listener);
  },
  removeMediaListener:function(listener){
    this.mql.removeListener(listener);
    this.narrowMobile.removeListener(listener);
  },
  isDesktop:function(){
      return this.mql.matches;
  },
  isNarrowMobile:function(){
      return !this.narrowMobile.matches;
  },
  topnavContainer:{
    display:"flex",
    flexDirection: "column",
    width:"100%",
    justifyContent: "flex-start",
    alignItems:"flex-start",
    position:"fixed",
    zIndex:100,
    top:0,
    left:0
  },
  topnavmobile: {
    paddingRight:30,
    paddingTop:10,
    width:"100%",
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#EEEEEE",
    borderBottomColor:'#CCCCCC',
    borderBottomStyle:"solid",
    shadowColor:"#888888",
    shadowOffset:{ width: 10, height: 10 },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 10,
    alignItems: "center",

  },




  appTitleContainer:{
    marginLeft:10,
    paddingTop:5,

  },

  appDesktopTitle:{
    fontSize: 20,
    color: "#4880ED",
    whiteSpace: "nowrap",
    fontWeight: 300,
    fontFamily:"Elysio-Light, Helvetica, Arial, sans-serif"
  },
  appMobileTitle:{
    fontSize: 20,
    color: "#4880ED",
    whiteSpace: "nowrap",
    fontWeight: 300,
    fontFamily:"Elysio-Light, Helvetica, Arial, sans-serif"
  },
  appVersion:{
    fontFamily: "GiorgioSans-Regular",
    fontSize: 12,
    color: "#4880ED",
    marginLeft:10
  },
  subtitleDesktopContaier:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      fontFamily: "GiorgioSans-Regular",
      color: "#4880ED",
      fontSize: 12,
  },
  subtitleMobileContaier:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    fontFamily: "GiorgioSans-Regular",
    color: "#4880ED",
    fontSize: 12,
  },
  userinfo:{
    position:"absolute",
    right:0,
    top:10,
    marginRight:20,
    color: "#80ccff",
  },
  mobileMenu:{

  },
  mobileMenuIcon:{
    fontWeight: 'normal',
    fontSize:40,
    color: "#4880ED",
    fontStyle: 'normal',
  },
  mobileMenuOverlay:{
      width:"100%",
      height:1000,
      borderTopColor:'#EEEEEE',
      borderTopStyle:"solid",
      borderTopWidth:5,
      boxShadow: "0 -5px 5px -5px #333"
  },
  menuItems:{
    position:"absolute",
    display:"flex",
    flexDirection:"row",
    right:0,
    top:24
  },
  menuItemsMobile:{
    display:"flex",
    flexDirection:"column",
    backgroundColor:"rgba(0,0,0,0)",
    width:"100%",

  },


  menuItem:function(isSelected,hover){

    var ret= {
      float: "left",
      display: "block",
      textAlign: "center",
      padding: "8px 16px",
      textDecoration: "none",
      fontSize: 17,
      marginBottom: 0,
      color: "#4880ED",
      whiteSpace:"nowrap",
      fontWeight:300
    };
    if(this.isDesktop()){
        ret.borderTopRightRadius=10;
        ret.borderTopLeftRadius=10;
        ret.marginBottom=10;
        ret.color="#4880ED";
    }
    else{
        ret.color="#4880ED";
        ret.textAlign="left";
        ret.backgroundColor="#FFFFFF";
        ret.borderBottomColor='#EEEEEE';
        ret.borderBottomStyle="solid";
        ret.borderBottomWidth=5;


    }
    if(isSelected){
      ret.color="#002080";
      ret.fontWeight=500;
      //ret.backgroundColor="#4880ED";
    }
    else if(hover){
      //ret.backgroundColor="#D8D0ED";
      ret.color="#66ccff";
      ret.fontWeight=300;
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
  },
  
};
styles.topnav=Object.assign({},styles.topnavmobile,{
      justifyContent: "flex-start",
});


export {styles};
