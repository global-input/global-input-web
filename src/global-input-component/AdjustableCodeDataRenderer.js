import React, {Component} from 'react';
import CodeDataRenderer from "./CodeDataRenderer";
import "./AdjustableCodeDataRenderer.css";


export   default class AdjustableCodeDataRenderer extends Component {
  constructor(props){
    super(props);
    this.state={size:300,level:"Q"};
  }
  setSize(size){
    this.setState(Object.assign({},this.state,{size}));
  }
  setLevel(level){
    this.setState(Object.assign({},this.state,{level}));
  }
  render() {
      var {connector,type}=this.props;
      var {size,level}=this.state;
      return(
        <div className="adjustableCodeData">
          <div className="adjustableCodeDataContainer">
              <CodeDataRenderer connector={connector} type={type} size={size} level={level}/>
          </div>
          <div className="codedataControllerContainer">
            <input type="range" min="100" max="1000" step="10" value={size} onChange={evt=>{
                this.setSize(evt.target.value);
            }}/>
            <select value={level} onChange={evt=>{
              this.setLevel(evt.target.value);
            }}>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="Q">Q</option>
              <option value="H">H</option>
            </select>
          </div>

        </div>

      );
  }
}
