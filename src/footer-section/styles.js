export const images={
    backgroundimage:require('./background.svg'),
    whatsapp:require('./whatsapp.svg'),
    gitter:require('./gitter.svg'),
};

export const styles={

    container:{

      paddingTop:100,
      backgroundImage: "url("+images.backgroundimage+")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      width:"100%",
      minHeight:300,
      color:"white",
      
    },
    titleContainer:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",

      fontSize:40,
    },
    iConsContainer:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      marginTop:50,
      paddingLeft:100
    },
    icon:{
      marginRight:100
    },
    contactContainer:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      marginTop:50,
      marginBottom:100
    },
    contact:{
        container:{
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          marginRight:50
        },
        title:{
          fontSize:26,
          marginBottom:15
        },
        item:{
          fontSize:15,
          marginBottom:10
        }
    }



}
