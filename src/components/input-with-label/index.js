import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';


export default class InputWithLabel extends Component{
  getStyles(){
      var styles={
          container:{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                width:"100%",
          },
          field:{
                width:"100%",
                fontSize:"1vw",
                color:"#5291CD",
          },


          label:{
                fontSize: "1vw",
                color: "#4880ED",
                minWidth:100,
                display:"flex",
                flexDirection:"row",
                justifyContent:"flex-start",
                alignItems:"center"
          },
          help:{
            fontSize:10,
            color:"#5291CD",
            paddingLeft:"3vw",
            paddingRight:"3vw"
          }
      }

      return styles;

  }
  render(){
         var styles=this.getStyles();
         if(this.props.type==="textarea"){
           return this.renderTextArea(styles);
         }
         else{
           return this.renderTextInput(styles);
         }


  }
  renderTextInput(styles){
    return(
      <div className="form-group" style={styles.container}>
            <input  className="form-control active"
            id={this.props.id}
            type={this.props.type}
            style={styles.field}
            readOnly={this.props.readOnly}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}            
            onChange={(evt) => {
                if(this.props.onChange){
                   this.props.onChange(evt.target.value,this.props.id);
                }

             }} value={this.props.value} required/>
          <label htmlFor={this.props.id} className="form-control-placeholder" onClick={this.labelClicked.bind(this)}>
               <span style={styles.label}>{this.props.label}</span>
            </label>
          {this.renderHelp(styles)}
      </div>
    );
  }
  renderTextArea(styles){
    return(
      <div className="form-group" style={styles.container}>
            <div style={styles.label}>{this.props.label}</div>
              <textarea  className="form-control"
                id={this.props.id}
                type={this.props.type}
                style={styles.field}
                readOnly={this.props.readOnly}
                rows="6"
                onChange={(evt) => {
                    if(this.props.onChange){
                       this.props.onChange(evt.target.value,this.props.id);
                    }

                 }} value={this.props.value} required/>
      </div>
    );
  }

  renderHelp(styles){
      if(this.props.help){
        return(
            <div style={styles.help}>{this.props.help}</div>
          );
      }
      else{
        return null;
      }

  }
  labelClicked(){
      document.getElementById(this.props.id).focus();

  }

}


InputWithLabel.propTypes={
    id:PropTypes.string.isRequired,
    type:PropTypes.string,
    label:PropTypes.string,
    readOnly:PropTypes.bool,
    onChange:PropTypes.func,
    styles:PropTypes.object,
    help:PropTypes.string,
}
InputWithLabel.defaultProps={
    type:"text"
}
