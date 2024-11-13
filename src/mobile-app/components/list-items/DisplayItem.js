import React, { Component } from 'react';
import { styles } from './styles';

export default class DisplayItem extends Component {
  render() {
    return (
      <div style={styles.item}>
        <div style={styles.itemIcon}>
          <div onClick={this.props.onPress} style={{ cursor: 'pointer' }}>
            <img src={this.props.image} alt="" />
          </div>
        </div>
        <div style={styles.itemDescription}>
          <div>{this.props.description}</div>
        </div>
      </div>
    );
  }
}