import {styleMatchingScreenSize} from "../../../components/screen-media";
export const images={    
    footerBackground:require("./images/footer-background.svg"),
}

export const styles={
  
footer:{
      container:{
      paddingTop:100,
      backgroundImage: "url("+images.footerBackground+")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      width:"100%",
      minHeight:300,
      color:"white",
      paddingLeft:50,
      paddingBottom:50,
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
      
    },
    content:{
      get:styleMatchingScreenSize,
      default:{
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        width:"90%",        
        color:"#FFFFFF", //#4880ED
        paddingLeft:20,
        paddingRight:10,
        paddingTop:20,
        paddingBottom:20
        
      },
      bigScreen:{
        width:1200
      },
      screen1245:{
        width:1000
      },
      desktop:{
        width:"90%"
      }
    },
    items:{
      display:"flex",
      flexDirection: "row",
      justifyContent:"flex-start",
      alignItems:"flex-start",      
    },
    singleItem:{
      display:"flex",
      flexDirection: "row",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      marginBottom:10,
      
    },
    item:{
      paddingLeft:20,
      width:250,
      borderRight:"2px solid white",
      paddingBottom:10
    },
    lastItem:{
      paddingLeft:20,
      width:250,
    },
    link:{
      fontWeight:50,
      color:"#FFFFFF"
    
    }
    

}
  



}
