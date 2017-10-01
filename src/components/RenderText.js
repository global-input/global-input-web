import React, {Component} from 'react'


export default class RenderText extends Component{
      render(){
        if(this.props.content){
          return(
            <div className={this.props.containerClass}>
              <h2 className={this.props.titleClass}>
                    {this.props.title}
              </h2>
              {this.props.content.map((p,index)=>{
                  return(<h3 className={this.props.contentClass} key={index}>{p}</h3>);
                 })
              }
            </div>
          );
        }
        else{
          return null;
        }


      }
}
