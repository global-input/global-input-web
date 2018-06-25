const styles={
  mql:window.matchMedia(`(min-width: 800px)`),
  isMobile(){
      return !this.mql.matches;
  },

      container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",

      },
      appImage:{
        marginTop:20
      },
      link:{
          color:"white",
          textDecoration:"underline"
      },
      imageLink:{
        color:"white",
        textDecoration:"underline",
        marginRight:20
      },

      qrCodeContainer:{
        padding:5,
        display:"flex",
        width:"100%",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"


      },
      subHeader:{
          width:"100%",
          paddingLeft:10,
          paddingTop:10,
          paddingBottom:10,
          paddingRight:10,
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"flex-start",

      },
      subFooter:{
        width:"100%",
        paddingLeft:50,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
      },

      title:{
        fontSize: 26,
        color: "#414242",
        textAlign: "center",
        fontWeight: "lighter"
      },
      instruction:{
        fontSize: 14,
        color: "#414242",
        fontWeight: "lighter"
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

      pageDescriptionSection:{
              display:"flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-begin",

              margin:0,
              backgroundColor: "#4880ED",
              paddingTop:30,
              paddingLeft:20,
              paddingRight:0,
              paddingBottom:0,
              width:"100%",


      },

      pageDescriptionLine:{
        fontSize: 16,
        color: "#414242",
        fontWeight: "lighter",
        color:"white",
      },

      appearWithTransparency:{
          marginBottom:20,
          opacity: 0,
          transform: 'translate(0) rotate(0deg) scale(0)',
          animation: 'appearWithTransparency 1s forwards'
      },

      advertTitle:{
        fontSize: 32,
        color: "#414242",
        fontWeight: "lighter",
        color:"white",
        marginBottom:10
      },
      advertContent:{
        fontSize: 22,
        color: "#414242",
        fontWeight: "lighter",
        color:"white"
      },

      appContent:{
        fontSize: 17,
        fontFamily: "'Roboto', sans-serif",
        textTransform: "none",
        fontWeight: 300,
        color: "white",
        lineHeight: 1.5
      },
      pageDescription:{
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop:50,
        marginRight:20,
        paddingBottom:0,
        flex:1,

      },
      installContainer:{
        paddingTop:5

      },
      advertItemContainer:{
          position:"absolute",
          lef:10,
          top:10
      },
      advertContainer:{
        position:"relative",
        minHeight:180,
        width:"100%",
        

        overflow:"scroll",

      }




};
  styles.advertTitleMobile=Object.assign({},styles.advertTitle,{
  fontSize: 18,

});

styles.advertContentMobile=Object.assign({},styles.advertContent,{
fontSize: 12,
});

styles.advertContainerMobile=Object.assign({},styles.advertContainer,{
  minHeight:120,

});

styles.pageDescriptionSectionMobile=Object.assign({},styles.pageDescriptionSection,{
  flexDirection:"column",

});

styles.pageDescriptionWithImage=Object.assign({},styles.pageDescription,{


});



export {styles};
