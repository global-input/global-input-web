export const styles={
    container:{
        position:"absolute",
        backgroundColor:"rgba(128,128,128,0.5)",
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    dialog:{
      position:"relative",
      backgroundColor:"white",
      marginTop:"10vw",
      width:"50%",
      height:"50%",
      borderRadius:15,
      paddingLeft:"2vw",
      paddingRight:"2vw",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start"
    },
    title:{
      marginTop:"1vw",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      fontSize:"2vw",
      color:"#5291CD",
    },
    content:{
      marginTop:"1vw",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      fontSize:"1vw",
      color:"#5291CD",
      flex:1
    },
    footer:{

      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      paddingRight:"2vw"
    },
    button:{
          color:"#5291CD",
          borderRadius:8,
          border:"3px solid #5291CD",
          marginRight:"5vw",
          marginBottom:"2vw"

    },
    multiline:{
        container:{
            marginTop:"10",
            display:"flex",
            flexDirection:"column",
            width:"auto",
            paddingRight:"2vw",

        },
        item:{
            display:"flex",
            flexDirection:"row",
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center"
        },
        text:{
            paddingLeft:10,

        }
    }


};
