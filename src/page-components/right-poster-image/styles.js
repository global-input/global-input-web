import {styleMatchingScreenSize,screenMedia} from "../../components/screen-media";
var styles={
  rightImage:{
     default:{
            position:"absolute",
            top:"2vw",
            right:"5vw"
          },

           screen1080:{
             top:"1vw",

           },
          mobile:{
            position:"static",
            height: "auto",
            marginTop:30,
            width:"80%",
            display:"block",
            marginLeft: "auto",
            marginRight: "auto"
          },
      get:styleMatchingScreenSize
  },
};

export {screenMedia,styles};
