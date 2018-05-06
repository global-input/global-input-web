export const styles={
        mql:window.matchMedia(`(min-width: 800px)`),
        container:{

        },
        content:{
            height:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"center",
            paddingTop:20
        },
        applicationSection:{
                display:"flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                margin:0,
                backgroundColor: "#4880ED",
                paddingTop:10,
                paddingLeft:20,
                paddingRight:0,
                paddingBottom:0,
        },
        getApplicationSection:function(){
                if(!this.mql.matches){
                    return Object.assign({},this.applicationSection, {flexDirection:"column",alignItems:"flex-end"});
                }
                else {
                  return this.applicationSection;
                }
      },

      appContent:{
        fontSize: 17,
        fontFamily: "'Roboto', sans-serif",
        textTransform: "none",
        fontWeight: 300,
        color: "white",
        lineHeight: 1.5
      },
      appDescription:{
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        margin:0,
        marginRight:20,
        paddingBottom:30,

      },
      link:{
          color:"white",
          textDecoration:"underline"
      },
      qrCodeContainer:{
        marginLeft:"150px",
        padding:10
      },

}
