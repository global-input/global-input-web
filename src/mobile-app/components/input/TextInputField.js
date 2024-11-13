import React, { Component } from 'react';
import { styles, stylesWithNumberOfLines } from './styles';

export default class TextInputField extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
    this.textField = React.createRef();
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  focus() {
    if (this.textField && this.textField.current) {
      this.textField.current.focus();
    }
  }

  onBlur() {
    this.setState({ focused: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onFocus() {
    this.setState({ focused: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  donePress() {
    if (this.textField && this.textField.current) {
      this.textField.current.blur();
    }
    this.setState({ focused: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  renderFocusContent() {
    if (this.state.focused) {
      if (this.props.focusedContent) {
        return this.props.focusedContent;
      } else {
        return null;
      }
    } else if (this.props.notFocusedContent) {
      return this.props.notFocusedContent;
    } else {
      return null;
    }
  }

  renderLabelIcon() {
    if (this.props.labelIcon) {
      return (
        <img src={this.props.labelIcon} style={styles.labelIcon} alt="" />
      );
    } else {
      return null;
    }
  }

  renderLabel() {
    if (this.props.value && this.props.placeholder) {
      return <div style={styles.label}>{this.props.placeholder}</div>;
    } else {
      return null;
    }
  }

  renderOneLine() {
    
    return (
      <div style={styles.fieldContainer}>
        {this.renderLabelIcon()}
        <div style={styles.textInputContainer}>
          {this.renderLabel()}
          <input
            
            style={styles.inputText}            
            editable={this.props.editable}            
            value={this.props.value}
            onBlur={this.onBlur.bind(this)}
            onFocus={this.onFocus.bind(this)}
            ref={textField => {
              this.textField = textField
            }}
            onChange={e=>this.props.onChangeTextValue(e.target.value)}
            autoCapitalize={this.props.autoCapitalize}            
            placeholder={this.props.placeholder}
          />
        </div>
        {this.renderFocusContent()}
        {this.props.children}
      </div>
    );
  }

  renderMultiLine (numberOfLines) {
    var dynamicStyle = stylesWithNumberOfLines(numberOfLines)
    return (
      <div style={dynamicStyle.textAreaContainer}>
        <div style={styles.labelContainer}>
          <div style={styles.labelAndIcon}>
            {this.renderLabelIcon()}
            <span style={styles.label}>{this.props.label}</span>
          </div>
          {this.renderFocusContent()}
          {this.props.children}
        </div>

        <textarea
          style={dynamicStyle.textarea}                    
          editable={this.props.editable}
          value={this.props.value}                    
          onBlur={this.onBlur.bind(this)}
          onFocus={this.onFocus.bind(this)}
          ref={textField => {
            this.textField = textField
          }}          
          onChangeText={e=>this.props.onChangeTextValue(e.target.value)}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }

  render() {
    let numberOfLines = 1;
    if (this.props.numberOfLines) {
      numberOfLines = parseInt(this.props.numberOfLines, 10);
    }

    if (numberOfLines > 1 || this.props.multiline) {
      return this.renderMultiLine(numberOfLines);
    } else {
      return this.renderOneLine();
    }
  }
}