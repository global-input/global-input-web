import {styleMatchingScreenSize} from "../../../components/screen-media";
export const styles={
      cardContainer:{
        dilshat:true,
        get:styleMatchingScreenSize,
        default:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-evenly",
          alignItems:"center",
          width:"100%",
          marginTop:100,
        },
        mobile:{
          flexDirection:"column",
          justifyContent:"flex-start",
        }
      },
};
