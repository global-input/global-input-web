import {images} from  "../../configs";
export const styles={
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
    height:950,

  },

  demoContainer:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  demoQrCodeContainer:{
    marginLeft:"150px"
  },
  toApply:{
    backgroundImage:"url("+images.arrowDownToApply+")",
    margin:0,
    padding:0,
    height:200,
    width:800,
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start"
  },
  enableButton:{
    marginLeft:150,
    marginTop:70
  },


};
