export const styles={
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        windows:"100%",
        minHeight:window.innerHeight*2/3

    },

    title:{
      display:"flex",
      flexDirection:"row",
      width:"100%",
      justifyContent:"flex-start",
      fontSize:"2vw",
      color:"#5291CD",
      marginBottom:"20",
      marginLeft:"4vw"
    },

    githuburl:{
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"flex-start",
          fontSize:"20",
          color:"#5291CD",
          width:"100%",
          marginLeft:"10vw",
          marginBottom:10
    },
    areaContainer:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
      width:"100%",
    },
    textArea:{
        get:()=>{

          return{
            width:"80%",
            height:window.innerHeight*2/3
          }
        }

    },
    copyButton:{
      color:"#5291CD",
      borderRadius:8,
    },
    topControl:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"flex-start",
      width:"80%",
      marginLeft:"10vw",
      marginBottom:10
    },
    globalConnect:{
        marginTop:20,
        position:"absolute"
    }

};
