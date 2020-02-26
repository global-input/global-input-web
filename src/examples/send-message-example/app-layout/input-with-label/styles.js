import styleMatchingScreenSize from '../styleMatchingScreenSize';
export var styles={
    container:{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          width:"100%",

          marginBottom:10

    },
    field:{
        get:styleMatchingScreenSize,
        default:{
          width:"100%",
          fontSize:"1vw",
          color:"#5291CD",
        },
        readOnly:{
            backgroundColor:"#AAAAAA"
        }
    },


    label:{
          get:styleMatchingScreenSize,
          default:{
              fontSize: "1vw",
              color: "#4880ED",
              minWidth:100,
              display:"flex",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
              transform: 'translateY(10px)',
          },
          placeholder:{
              transform: 'translateY(30px)',
          }


    },
    arealabel:{
          get:styleMatchingScreenSize,
          default:{
              fontSize: "1vw",
              color: "#4880ED",
              minWidth:100,
              display:"flex",
              flexDirection:"row",
              justifyContent:"flex-start",
              alignItems:"center",
          },
          placeholder:{
              transform: 'translateY(50px)',
          }


    },

    help:{
      fontSize:10,
      color:"#5291CD",
      paddingLeft:"3vw",
      paddingRight:"3vw"
    }
};
