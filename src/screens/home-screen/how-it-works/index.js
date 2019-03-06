import React from 'react';

export default class HowItWorks extends React.Component{
  getStyles(){
    return {
        container:{
            width:"100%",
            height:1000,
            border:"1px solid red"
            //backgroundRepeat: 'no-repeat',
            //backgroundSize: "cover",



        }

    }

  }

  render(){
    const styles=this.getStyles();
    return(
        <div style={styles.container}>

        </div>
    );

  }
}
