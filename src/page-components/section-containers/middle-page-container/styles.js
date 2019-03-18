import {styleMatchingScreenSize} from "../../../components/screen-media";
export const styles={
      container:{
          get:styleMatchingScreenSize,
          default:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"center",
            width:"100%",
            marginTop:0,
            height:window.innerHeight,
          },



        }
};
