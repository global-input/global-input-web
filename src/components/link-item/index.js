import React from 'react';
import {Link} from 'react-router-dom';
import {styles} from './styles';
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



      if(this.props.to){
        return(
          <Link to={this.props.to} onMouseOver= {this.onMouseOver.bind(this)}
          onMouseOut = {this.onMouseOut.bind(this)} style={this.state.hover?this.props.textStyle.hover:this.props.textStyle.default}>
              <img  style={styles.image}
                    src={this.props.image}/>
              {this.props.children}
          </Link>
        );
      }
      else{

          if(this.props.textStyle){
            return(
              <a href={this.props.href} onMouseOver= {this.onMouseOver.bind(this)}
              onMouseOut = {this.onMouseOut.bind(this)} target="_blank"
              style={this.state.hover?this.props.textStyle.hover:this.props.textStyle.default}>
                  <img src={this.props.image} style={styles.image}/>

                  {this.props.children}


              </a>
            );
          }
          else{
            return (
              <div>error</div>
            )
          }

      }
    }


}
