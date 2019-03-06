
const images={
    path39:require("./path-39.svg"),
}
export var styles={

firstHalf:{

    backgroundImage: "url("+images.path39+")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    
    border:"1px solid red",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start"

},
  title:{
      color:"white",
      fontSize:"3vw",
      marginLeft:30,
  },

  appContent:{
    fontSize: 17,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "none",
    fontWeight: 300,
    color: "white",
    lineHeight: 1.5
  },
  content:{
    paddingTop:10,
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
     backgroundColor:"#A9C8E6", //#4880ED
      width:"100%",

  },

 itemSection:{
    marginTop:20,
    marginBottom:10,
    padding:10,

    backgroundColor:"white",
    width:"95%",
    borderRadius:25,

 },





 installSection:{
   width:"100%",
   display:"flex",
   flexDirection:"row",
   justifyContent:"center",
   alignItems:"center",
   paddingBottom:25

 },
 imageLink:{

   textDecoration:"underline",
   marginRight:20,
   marginBottom:10,

 },




};
