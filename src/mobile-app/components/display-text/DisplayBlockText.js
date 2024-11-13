import React, { Component } from 'react';
import { styles } from './styles';
import DisplayContent from "./DisplayContent";

export default class DisplayBlockText extends Component {
  renderTitle() {
    if (this.props.title) {
      return (
        <div style={styles.blockTitle}>{this.props.title}</div>
      );
    } else {
      return null;
    }
  }

  render() {
    if (this.props.content) {
      return (
        <div style={styles.textBlockContainer}>
          {this.renderTitle()}
          <DisplayContent
            content={this.props.content}
            contentTextStyle={styles.blockContentText}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}