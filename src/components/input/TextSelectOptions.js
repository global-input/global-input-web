import React, {Component} from 'react';

export default class TextSelectOptions extends Component{
  renderItem(item,index){
    var key=index+"_"+item.label;
    return(
              <option value={item.value} key={key}>{item.label}</option>
        );
  }

  render(){
    var selectedValue="";
    if(this.props.selected){
      selectedValue=this.props.selected.value;
    }
    else{
      console.warn("****TextSelectOptions missing selected property");
    }

    return(
      <div className="form-group">
            <select id={this.props.fieldId} className="form-control"
              value={selectedValue} onChange={evt=>{
                  this.props.onChange(evt.target.value, this.props.fieldIndex);

            }}>
                  {this.props.selections.map(this.renderItem.bind(this))}
            </select>
            <label htmlFor={this.props.fieldId} className="form-control-placeholder">{this.props.label}</label>
      </div>
    );

  }

}
