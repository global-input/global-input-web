import React from 'react';

const images={
    extension:require("./extension.svg"),
    one:require("./1.svg"),
    two:require("./2.svg"),
    three:require("./3.svg"),
    qrcode:require("./qrcode.svg"),
    mobile:require("./mobile.svg"),
}

export default class HowItWorks extends React.Component{
  getStyles(){
    return {
        container:{
            position:"static",
            width:"100%",
            height:500,
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"flex-start"
        },
        title:{
          marginTop:"5vw",
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          color:"white",
          fontSize:40,
          width:"100%"

        },
        howItWorks:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-around",
          alignItems:"center",
          width:"100%",
          height:10,
          marginTop:100
        },
        extension:{
          position:"static",
          width:150,
          height:150,
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          paddingLeft:30,
          backgroundImage: "url("+images.one+")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "0px 20px"

        },
        qrcode:{
          position:"static",
          width:150,
          height:150,
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          paddingLeft:30,
          backgroundImage: "url("+images.two+")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "0px -40px"

        },
        mobile:{
          position:"static",
          width:150,
          height:150,
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          paddingLeft:30,
          backgroundImage: "url("+images.three+")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "0px -40px"

        },
        itemName:{
          margin:10,
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          color:"white",
          fontSize:20,
          width:"100%",
          whiteSpace:"nowrap"
        }

    }

  }

  render(){
    const styles=this.getStyles();
    return(
        <div style={styles.container}>
                <div style={styles.title}>How It Works</div>
                <div style={styles.howItWorks}>
                      <div style={styles.extension}>
                          <img src={images.extension}/>
                          <div style={styles.itemName}>Install Extension</div>
                      </div>
                      <div style={styles.qrcode}>
                          <img src={images.qrcode}/>
                          <div style={styles.itemName}>Scan QR Code</div>
                      </div>

                      <div style={styles.mobile}>
                          <img src={images.mobile}/>
                          <div style={styles.itemName}>Control with Device</div>
                      </div>
                </div>


        </div>
    );

  }
}
