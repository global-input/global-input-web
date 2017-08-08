
import React, {Component} from 'react'


export default class DisplaySource extends Component{
  constructor(props){
    super(props);
    this.state={showing:false,linkText:"Show source code"};
    console.log("*******:"+this.state);
  }
  toggle(){
    console.log("11*******:"+this.state);
    var showing=!(this.state.showing);
    var linkText="Show source code";
    if(showing){
      linkText="Hide source code";
    }
      this.setState(Object.assign({}, this.state,{showing,linkText}));
      return false;
  }
 renderSource(){
  return(
    <pre>{`
    `}</pre>
  );
 }
 _renderSource(){
   if(this.state.showing){
     return this.renderSource();
   }
   else{
     return null;
   }
 }
render(){

  return(
    <div>
      <div className="hideSource">
            <a onClick={this.toggle.bind(this)} className="showSourceText">{this.state.linkText}</a>
      </div>
      <div className="codeContainer">
          {this._renderSource()}
      </div>
    </div>
   );
 }


}
