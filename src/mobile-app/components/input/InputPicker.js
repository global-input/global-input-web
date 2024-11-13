import React, { Component } from 'react';
import { styles } from './styles';


export default class InputPicker extends Component {
  render() {
    let selectedValue = null;
    if (this.props.selectedItem) {
      selectedValue = this.props.selectedItem.value;
    }
    if (this.props.items) {
      return (
        <div style={styles.selectionFieldContainer}>
          <select
            style={styles.picker}
            value={selectedValue}
            onChange={(event) => {
              const selected = event.target.value;
              this.props.onValueChange(selected);
            }}
          >
            {this.props.items.map((item, index) => {
              const key = `${index}_${item.value}`;
              return (
                <option value={item.value} key={key}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
      );
    } else {
      return null;
    }
  }
}