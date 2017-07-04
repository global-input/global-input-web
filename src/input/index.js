import React, {Component} from "react";

export default class InputDisplay extends Component{
  constructor(props) {
    super(props);
  }
  handleChange(event){

   this.props.contentEdited(event.target.value);
    
  }
  render(){
    var content=this.props.content;
      return(
        <div>

            Text:
            <input type="text" name="name" onChange={this.handleChange.bind(this)} value={content}/>
        </div>
      );
  }
}
