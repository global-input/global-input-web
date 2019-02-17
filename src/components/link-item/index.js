import React from 'react';
import {Link} from 'react-router-dom';
export default class LinkItem extends React.Component{

    constructor(props){
      super(props);
      this.state={
        hover:false
      }
    }
    onMouseOver(){
        this.setState({hover:true});
    }
    onMouseOut(){
      this.setState({hover:false});
    }
    render(){
      let image=this.props.image;
      if(this.state.hover){
            image=this.props.imageHover;
      }
      if(this.props.to){
        return(
          <Link to={this.props.to} onMouseOver= {this.onMouseOver.bind(this)}
          onMouseOut = {this.onMouseOut.bind(this)}>
              <img  style={this.props.imageStyle}
                    src={image}/>
              {this.props.children}
          </Link>
        );
      }
      else{


          return(
            <a href={this.props.href} onMouseOver= {this.onMouseOver.bind(this)}
            onMouseOut = {this.onMouseOut.bind(this)} target="_blank">
                <img  style={this.props.imageStyle}
                      src={image}/>
                {this.props.children}
            </a>
          );
      }
    }


}
