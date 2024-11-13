import React, { Component } from 'react';
import { styles } from "./styles";

export default class CheckBoxButton extends Component {
  constructor(props) {
    super(props);
    if (typeof this.props.value !== 'undefined') {
      this.state = { value: this.props.value };
    } else {
      this.state = { value: false };
    }
  }

  onPress() {
    if (typeof this.props.value === 'undefined') {
      if (this.props.onChanged) {
        this.props.onChanged(!this.state.value);
      }
      this.setState({ value: !this.state.value });
    } else {
      if (this.props.onChanged) {
        this.props.onChanged(!this.props.value);
      }
    }
  }

  getCheckBoxState() {
    if (typeof this.props.value === 'undefined') {
      return this.state.value;
    } else {
      return this.props.value;
    }
  }

  renderImage(data, index) {
    if (data.image) {
      return <img src={data.image} alt="" />;
    } else {
      return null;
    }
  }

  renderLabel(data, index) {
    if (data.label) {
      return <span style={styles.iconText}>{data.label}</span>;
    } else {
      return null;
    }
  }

  render() {
    var display = [{ label: "" }, { label: "✓" }];
    if (this.props.display) {
      display = this.props.display;
    }
    var item = display[0];
    if (this.getCheckBoxState()) {
      item = display[1];
    }
    return (
      <div onClick={this.onPress.bind(this)} style={{ cursor: 'pointer' }}>
        <div style={styles.iconcontainer}>
          {this.renderImage(item)}
          {this.renderLabel(item)}
        </div>
      </div>
    );
  }
}