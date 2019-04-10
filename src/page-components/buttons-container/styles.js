import {styleMatchingScreenSize} from "../../components/screen-media";

export var styles={

  buttonsContainer:{
      default:{
        paddingBottom:10,

        display:"flex",
        flexDirection:"row",
        marginTop:20,
        marginLeft:50,
      },
      smallScreen:{

      },
      mobile:{

        flexDirection:"column",
        justifyContent:"space-between",
        width:"80%",
        minheight:130,        
      },
      bigScreen:{

      },
      get:styleMatchingScreenSize
  },

};
