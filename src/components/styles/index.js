import {images} from  "../../configs";
var globalStyles={
  applicationSection:{
    display:"flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin:0,
    backgroundColor: "#4880ED",
    paddingTop:20,
    paddingLeft:20,
    paddingRight:0,
    paddingBottom:0,

  },
  getApplicationSection:function(){

    if(!this.mql.matches){
        return Object.assign({},this.applicationSection, {flexDirection:"column",alignItems:"flex-end"});
    }
    else {
      return this.applicationSection;
    }
  },
  mql:window.matchMedia(`(min-width: 800px)`),
  appDescription:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin:0,
    minHeight:500,
    marginRight:20


  },
  link:{
      color:"white",
      textDecoration:"underline"

  },
  appImage:{
    margin:0
  },


  headerSection:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin:0,
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    lineHeight: "1.42857143",
    color: "#333",
    backgroundColor: "#fff",
    backgroundImage:"url("+images.globalInputBackground+")",
    backgroundRepeat:"no-repeat",
    backgroundAttachement:"scroll",
    backgroundPosition:"center center",
    backgroundSize:"cover",
    height:950,
  },
  scrollToButton:{
    backgroundImage:"url("+images.arrowDownToApply+")",
    paddingLeft:250,
    paddingTop:72,

    height:200,
    width:800,
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start"
  },

};


export {globalStyles};
