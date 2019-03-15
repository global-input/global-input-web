import {styleMatchingScreenSize} from "../../../components/screen-media";
export const images={
  authentication:require('./images/authentication.svg'),
  mobileControl:require('./images/control.svg'),
  secondScreen:require('./images/second-screen.svg'),
}

export const styles={
      cardContainer:{
        get:styleMatchingScreenSize,
        default:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-evenly",
          alignItems:"center",
          width:"100%",
          marginTop:50,

        },
        mobile:{
          flexDirection:"column",
          justifyContent:"flex-start",
        }
      },
};
