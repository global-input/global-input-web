
import React, {Component} from "react";


export default class LoadingIcon extends Component {

    render(){
      if(this.props.loading){
        return (
           <div className="loader"/>
        );
      }
      else{
        return null;
      }



    }

}
