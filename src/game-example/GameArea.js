
import React, {Component} from 'react';
import {styles} from "./styles";
export default class GameArea extends Component {

  componentDidMount(){
      this.props.initGame(this.canvas);
  }
  render(){
    return(
        <canvas style={styles.canvas} width={480} height={270} ref={canvas=>{
                this.canvas=canvas;
        }
      }/>
    );
  }
}
