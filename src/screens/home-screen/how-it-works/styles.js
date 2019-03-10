import {styleMatchingScreenSize} from "../../../utils/screenMedia";
export const images={
    extension:require("./images/extension.svg"),
    one:require("./images/1.svg"),
    two:require("./images/2.svg"),
    three:require("./images/3.svg"),
    qrcode:require("./images/qrcode.svg"),
    mobile:require("./images/mobile.svg"),
}


export const styles={
        container:{
            position:"static",
            width:"100%",
            height:500,
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"flex-start",

        },
        title:{
          marginTop:"5vw",
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          color:"white",
          fontSize:40,
          width:"100%"

        },
        howItWorks:{
          get:styleMatchingScreenSize,
          default:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            width:"100%",
            marginTop:100,
          },
          mobile:{
            flexDirection:"column",
            marginTop:10,
          }

        },
        extension:{
          position:"static",
          width:150,
          height:150,
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          paddingLeft:30,
          backgroundImage: "url("+images.one+")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "0px 20px",


        },
        qrcode:{
          position:"static",
          width:150,
          height:150,
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          paddingLeft:30,
          backgroundImage: "url("+images.two+")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "0px -40px"

        },
        mobile:{
          position:"static",
          width:150,
          height:150,
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          paddingLeft:30,
          backgroundImage: "url("+images.three+")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "0px -40px"

        },
        itemName:{
          margin:10,
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          color:"white",
          fontSize:20,
          width:"100%",
          whiteSpace:"nowrap"
        }

  }
