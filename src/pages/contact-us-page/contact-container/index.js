import React from 'react';



export default({children})=>(
    <div style={styles.contactContainer}>{children}</div>

);
const styles={
    contactContainer:{
            marginTop:100,
            width:"100%",
            height:"100%",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
            
    }

}