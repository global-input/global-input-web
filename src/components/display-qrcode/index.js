import React, {Component} from 'react';
import QRCode from "qrcode.react";



export  default class DisplayQRCode extends Component {
  constructor(props){
      super(props);
      this.onWindowResize=this.onWindowResize.bind(this);
  }
  componentDidMount() {
      window.addEventListener("resize", this.onWindowResize);
  }
  onWindowResize(){

    this.forceUpdate();
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.onWindowResize);
  }
  getStyles(){
          var styles={
              screen512:null,
              biggerThan512:function(){
                  if(!this.screen512){
                    this.screen512=window.matchMedia(`(min-width: 512px)`)
                  }
                  return this.screen512.matches;
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

              }
          };
          return styles;


    }



    render(){
      var styles=this.getStyles();
      var {code,size,level}=this.props;

      if(!size){
            var w = window.innerWidth-50;
            var h = window.innerHeight-50;
            if(w<h){
                size=w;
            }
            else{
              size=h;
            }
            if(size>400){
              size=400;
            }
      }
      else{
        size=parseInt(size);
      }
      if(!level){
        level="H";
      }
      if(!code){
        code="";
      }
      return(
          <div style={styles.container}>
                      <div style={styles.qrCodeContainer}>
                              <QRCode
                                        value={code}
                                        level={level}
                                        size={size}
                                       />
                      </div>
                      <div style={styles.label}>{this.props.label}</div>
          </div>
        );

    }
  }
