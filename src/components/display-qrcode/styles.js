const styles={
  mql:window.matchMedia(`(min-width: 800px)`),
  isMobile(){
      return !this.mql.matches;
  },
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  qrCodeContainer:{
    padding:5,
    display:"flex",
    width:"100%",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  label:{
    marginTop:10,
    fontSize: 22,
    color: "#4880ED",
    fontWeight: 300,

  },
};

export {styles};
