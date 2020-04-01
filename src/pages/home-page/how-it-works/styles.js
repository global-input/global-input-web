import {styleMatchingScreenSize} from "../../../components/screen-media";
export const images={
    extension:require("./images/extension.svg"),
    one:require("./images/1.svg"),
    two:require("./images/2.svg"),
    three:require("./images/3.svg"),
    qrcode:require("./images/qrcode.svg"),
    mobile:require("./images/mobile.svg"),
    small:{
      one:require("./images/small/1.svg"),
      two:require("./images/small/2.svg"),
      three:require("./images/small/3.svg"),
    }
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
            justifyContent:"space-around",
            height:"100%"

          }

        },
        extension:{
          get:styleMatchingScreenSize,
          default:{
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
          mobile:{
            width:150,

            backgroundImage: "url("+images.small.one+")",
          }



        },
        qrcode:{
          get:styleMatchingScreenSize,
          default:{
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
            width:150,
            backgroundImage: "url("+images.small.two+")",
          }


        },
        mobile:{
          get:styleMatchingScreenSize,
          default:{
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
          mobile:{
            width:150,

            backgroundImage: "url("+images.small.three+")",
          }

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
