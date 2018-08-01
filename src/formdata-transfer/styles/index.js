var styles={
  mql:window.matchMedia(`(min-width: 800px)`),
  isMobile(){
      return !this.mql.matches;
  },
  content:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    padding:0,


  },
  title:{
    fontFamily: "'Elysio-Light',Helvetica,Arial,sans-serif",

    fontWeight: 500,
    fontSize: 26,
    marginTop: 0,
    marginBottom: 15,
    color: "#4880ED",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:20

  },
  selectionContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginBottom:20
  },
  label:{
    minWidth:100,
  },

  buttonContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      flexWrap:"wrap",
      maxWidth:800,
      marginTop:20,
      marginBottom:10
  },
  narrowButtonContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      flexWrap:"wrap",
      width:"100%",
      marginTop:20,
      marginBottom:10
  },

  qrCodeContainer:{
    marginLeft:"150px",
    padding:10
  },
  textareaContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  button:{
      marginLeft:20,
      marginRight:20,
  },
  message:{
    fontSize: 17,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "none",
    fontWeight: 300,
    color: "blue",
    lineHeight: 1.5

  },
  formContainer:{
    maxWidth:700,
    padding:0,
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.22)",
    MozBoxShadow: "0px 0px 15px rgba(0, 0, 0, 0.22)",
    WebkitBoxShadow:"0px 0px 15px rgba(0, 0, 0, 0.22)",
    color: "#4880ED",
  },
  formHeader:{
    minHeight:50
  },
  blueHeader:{
      backgroundColor: "#4880ED",
      color:"white",
      padding:10,
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
  },
  fieldRow:{
      paddingTop:10
  },
  formContent:{
      padding:15

  },
  footer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    maxWidth:800,
    marginTop:20,
    marginBottom:10
  },
  fieldgroup:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      paddingTop:10,
      width:"100%",
      border:"1px solid red"

  },
  radioButton:{
    marginLeft:10,
    marginTop:10
  },
  alignRight:{
    marginLeft:50,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    marginBottom:5
  },
  help:{
    fontFamily: "'Roboto', sans-serif",
    fontSize: 12,
    color: "#4880ED",
  },

};

styles.formContainerDesktop=Object.assign({},styles.formContainer,{
          minWidth: 600,
});

export {styles};
