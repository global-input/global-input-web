import {images} from  "../../configs";
export const styles={
  headerSection:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin:4,
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    lineHeight: "1.42857143",
    color: "#333",
    backgroundColor: "#fff",
    backgroundImage:"url("+images.globalInputBackground+")",
    height:1100

  },
  fromStore:{
    display:"flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundImage:"url("+images.storeBackground+")",
    magin:0,
    padding:0,
    height:400
  },
  storeImage:{
    magin:0,
    border:"solid 10 red",
    marginRight:"100px"
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
