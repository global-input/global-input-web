import {styleMatchingScreenSize} from "../../utils/screenMedia";
export const styles={
      examplelink:{
        get:styleMatchingScreenSize,
        default:{
          float: "left",
          display: "block",
          textAlign: "center",
          textDecoration: "none",
          fontSize: 15,
          borderRadius:25,
          backgroundColor: "#4281BD",
          color:"white",
          whiteSpace:"nowrap",
          fontWeight:300,
          padding:10,
          maxHeight:40,
          marginLeft:20
        },

        selected:{
            color:"#002080",
            fontWeight:500
        },
        hover:{
            color:"#66ccff",
            fontWeight:300
        }
    }
};
