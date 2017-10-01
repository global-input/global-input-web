import {images} from  "../../configs";
export const globalStyles={
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
