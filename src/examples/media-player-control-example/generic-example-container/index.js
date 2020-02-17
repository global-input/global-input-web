import React from 'react';

const textContent={
    title:"Media Control App Example",
    githuburl:"https://github.com/global-input/media-player-control-example/"
};
  
export default ({children})=>{      
    return(
        <div style={styles.container}>

                <div style={styles.title}>
                    {textContent.title}
                </div>
                <div style={styles.githuburl}>
                    <a href={textContent.githuburl} target="_blank">{textContent.githuburl}</a>
                </div>
                <div style={styles.videoContainer}>
                    {children}
                </div>
        </div>
    );
};


const styles={
    container:{
        paddingTop:80,
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
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
    playHeadInfo:{
          fontSize:20,
          color:"#5291CD",
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
    videoContainer:{
        position:"relative"
    },
    barcodeContainer:{
        position:"absolute",
        top:50,
        width:"100%",
        height:"100%",

        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },

    barcode:{
      backgroundColor:"white",
      color:"#A9C8E6", //#4880ED
      padding:20,
    },
    reconnectConnectainer:{
      width:"100%"
    },
    reconnectButton:{
      display:"block",
      marginLeft:"auto",
      marginRight:"auto"
    }
  
  };
  
  
  
  
  
  
  