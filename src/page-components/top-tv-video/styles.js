import {styleMatchingScreenSize} from "../../components/screen-media";
export const images={
    computer:require("./images/computer.png")
}

export const styles={

  tv:{
      container:{
        get:styleMatchingScreenSize,
        default:{
          width:500,
          height:250,
          position:"absolute",
          top:100,
          right:100,
        },
        smallScreen:{
          right:0,

        },
        desktop:{
          position:"relative",
          top:100,
          left:20
        },


        mobile:{
          position:"relative",
          top:100,
          left:20

        }

      },
      inner:{
          display:"static"
      },
      screen:{
          width:405,
          position:"relative",
          top:23,
          left:25
      },
      img:{
        position:"absolute",
        top:0,
        left:0,
      },

  },
  
}
