import React, { Component } from 'react';

import { styles } from './styles';

import { images } from '../../configs';
import IconButton from '../buttons/IconButton';
import TextInputField from './TextInputField';

export default class TextFieldWithDone extends Component {
  constructor(props) {
    super(props);
    this.textField = React.createRef();
    this.donePress = this.donePress.bind(this);
  }

  focus() {
    if (this.textField && this.textField.current) {
      this.textField.current.focus();
    }
  }

  onBlur() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onFocus() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  donePress() {
    if (this.textField && this.textField.current) {
      this.textField.current.blur();
    }
  }

  renderFocusedContent() {
    if (this.props.focusedContent) {
      return this.props.focusedContent;
    } else {
      let imageURL = images.doneIcon;
      if (this.props.dark) {
        imageURL = images.doneIconDark;
      }
      return (
        <div style={styles.icon}>
          <IconButton image={imageURL} onClick={this.donePress} />
        </div>
      );
    }
  }

  render() {
    return (
      <TextInputField
        multiline={this.props.multiline}
        secureTextEntry={this.props.secureTextEntry}
        editable={this.props.editable}
        value={this.props.value}
        numberOfLines={this.props.numberOfLines}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        ref={this.textField}
        onChangeTextValue={this.props.onChangeTextValue}
        autoCapitalize={this.props.autoCapitalize}
        placeholder={this.props.placeholder}
        notFocusedContent={this.props.notFocusedContent}
        focusedContent={this.renderFocusedContent()}
        labelIcon={this.props.labelIcon}
      />
    );
  }
}