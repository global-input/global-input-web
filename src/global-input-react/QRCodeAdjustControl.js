


import React, {Component} from 'react';


export   default class QRCodeAdjustControl extends Component {

  render() {
      if(this.props.showControl){
return (
        <div className="globalInputCodeControllerContainer">
          <input type="range" min="100" max="1000" step="10" value={this.props.size} onChange={evt=>{
              this.props.onSetSize(evt.target.value);
          }}/>
        <select value={this.props.level} onChange={evt=>{
            this.props.onSetLevel(evt.target.value);
          }}>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="Q">Q</option>
            <option value="H">H</option>
          </select>
        </div>
      );
      }
      else{
          return null;
      }

  }


}
