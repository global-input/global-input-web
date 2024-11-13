import React, { Component } from 'react';
import { styles } from './styles';

export default class DisplayLongDescriptionItem extends Component {
  render() {
    return (
      <div style={styles.item}>
        <div style={styles.itemIcon}>
          <div onClick={this.props.onPress} style={{ cursor: 'pointer' }}>
            <img src={this.props.image} alt="" />
          </div>
        </div>
        <div style={styles.container}>
          <div style={styles.longTextContainer}>
            <div>{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}