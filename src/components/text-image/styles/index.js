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
       fontWeight: "lighter",
       marginBottom:10
     },
     spanStyle:{
       fontSize: 16,
       color: "#414242",
       fontWeight: "lighter",
     },
     image:{
       maxWidth: "100%",
       height: "auto"
     },

     mobileTextImageContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
     },
     mobileImageContainer:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
       width:"100%"

     }



}

styles.sectionHeadingMobile=Object.assign({},styles.sectionHeading,{
        fontSize: 20,
        paddingTop:10,
});
export {styles};
