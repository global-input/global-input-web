import React from 'react';

export default ({children})=>{      
    return(
          <div style={styles.container}>
          <div style={styles.title}>{textContent.title}</div>
          <div style={styles.topControl}>
          <span style={styles.githuburl}><a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a> </span>                
          </div>
          <div style={styles.areaContainer}>
                {children}
          </div>
          </div>
    );
};
const textContent={
  title: "Mobile Encryption",
  githuburl: "https://github.com/global-input/qr-code-printing-example"  
};
const styles={
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
        minHeight:window.innerHeight*2/3,        
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
    
    subtitle:{
      display:"flex",
      flexDirection:"row",
      width:"100%",
      justifyContent:"flex-start",
      fontSize:"1.2vw",
      color:"#5291CD",
      marginBottom:"20",
      marginLeft:"4vw"
    },
  
    githuburl:{
        fontSize:"20",
        color:"#5291CD",
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
    
    topControl:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      alignItems:"flex-end",
      width:"80%",
      marginLeft:"10vw",
      marginBottom:10
    },
    globalConnect:{
        marginTop:20,
        position:"absolute"
    },
    option:{
        marginRight:20
    },
    errorMessage:{
      fontSize:16,
      color:"#5291CD",
    },
    loading:{
      fontSize:16,
      color:"#5291CD",
    },
    textContent:{      
      color:"#5291CD", //#4880ED      
    }
  
  
  };
  
  
  
  
  
  
  