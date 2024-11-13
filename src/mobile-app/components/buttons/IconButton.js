import React, { Component } from 'react';
import { styles } from './styles';

export default class IconButton extends Component {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  renderImage() {
    if (this.props.image) {
      return <img src={this.props.image} alt="" />;
    } else {
      return null;
    }
  }

  renderLabel() {
    if (this.props.label) {
      var labelStyle = styles.iconText;

      if (this.props.labelStyle === 'light') {
        labelStyle = styles.iconTextLight;
      }
      return <span style={labelStyle}>{this.props.label}</span>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div style={styles.topIconContainer}>
        <div onClick={this.onPress.bind(this)} style={{ cursor: 'pointer' }}>
          <div style={styles.iconcontainer}>
            {this.renderImage()}
            {this.renderLabel()}
          </div>
        </div>
      </div>
    );
  }
}