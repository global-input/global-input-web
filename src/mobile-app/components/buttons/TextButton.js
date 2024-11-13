import React, { Component } from 'react';
import images from "../../configs/images";
import { styles } from "./styles";

export default class TextButton extends Component {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    var label = this.props.label;
    return (
      <div onClick={this.onPress.bind(this)} style={{ cursor: 'pointer' }}>
        <div style={styles.buttonStyle}>
          <span style={styles.button}>{label}</span>
        </div>
      </div>
    );
  }
}