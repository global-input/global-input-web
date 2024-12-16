import {commonStyles} from "../../../common-styles";

var stylesData = {
  content:{
     display:"flex",
     flexDirection:"column",
     justifyContent:"flex-start",
     paddingBottom:45,
     paddingLeft:5,
     paddingRight:5
  },
  subtitle:{

      display: "flex",
      flexDirection: 'row',
      justifyContent:"flex-end",
      alignItems:"center",
      width:"100%"
  },
  subtitleText:{
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium'
  },
  subtitleContainer:{
    width:"100%",
    paddingRight:20,
    marginBottom:10
  },
  titlesContainer:{
    flex:1,
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    justifyContent:"center"
  },
  loadingContainer:{
    display:"flex",
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:"center",
    flex:1
  },
  loadingMessageContainer:{
    display:"flex",
    flexDirection: 'row',
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
  },
  loadingMessageText:{
      fontSize:20,
      textAlign:"center",
      color:"white"

  },
  loadingSpinner: {
    width: '40px',
    height: '40px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    borderStyle: 'solid',
    animation: 'spin 1s linear infinite',
    margin: '20px auto', // Center the spinner
  }
};

export const styles = Object.assign({},commonStyles,stylesData);
