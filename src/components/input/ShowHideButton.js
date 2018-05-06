import React, {Component} from 'react';
import {images} from "../../configs";
import {styles} from "./styles";

export default class ShowHideButton extends Component{
  constructor(props){
      super(props);
      this.state={mouseOver:false};
  }
  mouseOut() {
    this.setState({mouseOver: false});
  }

  mouseOver() {
    this.setState({mouseOver: true});
  }

  render(){
      var image=images.showSecret;
      if(this.props.show){
          image=images.hideSecret;
          if(this.state.mouseOver){
            image=images.hideSecretOver;
          }
      }
      else if(this.state.mouseOver){
            image=images.showSecretOver;
      }


      return(
        <div style={styles.alignRight}>
              <a onClick={()=>{
                    this.props.setShow(!this.props.show);
                }} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.mouseOver.bind(this)}>
                    <img src={image}/>
              </a>
        </div>
      );
  }

}
