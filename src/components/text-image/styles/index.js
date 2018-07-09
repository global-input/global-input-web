var styles={
      mql:window.matchMedia(`(min-width: 800px)`),
      isMobile(){
          return !this.mql.matches;
      },
     sectionHeading:{
        fontFamily: "'Elysio-Light',Helvetica,Arial,sans-serif",

        fontWeight: 500,
        fontSize: 26,
        marginTop: 0,
        marginBottom: 15,
        color: "#4880ED"
     },
     subtitle:{
       fontFamily: "'Elysio-Light',Helvetica,Arial,sans-serif",
       fontWeight: 500,
       fontSize: 20,
       marginTop: 0,

       color: "#4880ED"
     },

     imageTitle:{
       fontWeight: 500,
       fontSize: 26,
       marginTop: 10,
       marginBottom: 5,
       color: "#4880ED",
       display:"flex",
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center"
     },
     buttonContainer:{
         display:"flex",
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
         width:"100%",
         marginTop:20,
         marginBottom:10
     },
     message:{
       fontSize: 17,
       fontFamily: "'Roboto', sans-serif",
       textTransform: "none",
       fontWeight: 300,
       color: "blue",
       lineHeight: 1.5
     },
     lineStyle:{
       fontSize: 16,
       color: "#414242",
       fontWeight: 300,
       marginBottom:10,

     },
     listItemStyle:{
       fontSize: 16,
       color: "#414242",
       fontWeight: 300,
     },
     spanStyle:{
       fontSize: 16,
       color: "#414242",
       fontWeight: 300,
     },
     imageContainer:{
       display:"flex",
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center",
       width:"100%"
     },
     image:{
       maxWidth: "100%",
       height: "auto"
     },
     centerImageContainer:{
       width:"100%",
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
     },

     mobileTextImageContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
     },
     mobileImageContainer:{
       display:"flex",
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center",
       width:"100%"

     },
     sourceCodeContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
     },
     sourceCodes:{
      maxHeight: 500,
      maxWidth:800,
      background: "#D9DFE9",
    	overflowY: "scroll",
    },


    sectionTile:{
       display:"flex",
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center",
       color: "white",
       fontSize: 26,
    },




}

styles.sectionTitleMobile=Object.assign({},styles.sectionTile,{
    fontSize: 20,
    paddingTop:10,

});


styles.sectionHeadingMobile=Object.assign({},styles.sectionHeading,{
        fontSize: 20,
        paddingTop:10,
});

styles.imageTitleMobile=Object.assign({},styles.imageTitle,{
        fontSize: 20,
});



styles.lineStyleMobile=Object.assign({},styles.lineStyle,{
          fontWeight: 300,
});

export {styles};
