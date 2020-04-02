import {styleMatchingScreenSize} from "../../components/screen-media";
export const images={
    appIcon:require("./images/app-icon.png"),
    downloadapp:require("./images/download-app.svg"),
    companyIcon:require("./images/company-icon.png"),
}

export const styles={
      readMorelink:{
        get:styleMatchingScreenSize,
        default:{
          float: "left",
          display: "block",
          textAlign: "center",
          textDecoration: "none",
          fontSize: 15,
          borderRadius:25,
          color:"#4281BD",
          whiteSpace:"nowrap",
          padding:10,
          minWidth:120,
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
    },
    buttonLinks:{
      get:styleMatchingScreenSize,
      default:{
        float: "left",
        display: "block",
        textAlign: "center",
        textDecoration: "none",
        fontSize: 15,
        borderRadius:25,
        color:"white",
        backgroundColor:"#4281BD",
        whiteSpace:"nowrap",
        padding:10,
        minWidth:120,
        marginLeft:20,

        marginBottom:20
      },
      white:{
        color:"#4281BD",
        backgroundColor:"white",

      },

      selected:{
          color:"#002080",
          fontWeight:500
      },
      hover:{
          color:"#66ccff",
          fontWeight:300
      },
      mobile:{
        width:"90%",
      }
  },
    menuItem:{
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
