import React, {Component} from "react";

export default class InputDisplay extends Component{

  render(){
    var content=this.props.content;
      return(
        <div>
           aaaa{content}
        </div>
      );
  }
}
