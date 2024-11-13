import React, { Component } from 'react';
import { styles } from './styles';

export default class EmptySpace extends Component {
  constructor(props) {
    super(props);
    this.state = { keyboardShowing: null, windowHeight: window.innerHeight };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    // Initial check in case the keyboard is already open
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const newWindowHeight = window.innerHeight;

    // If the new window height is less than the previous, assume keyboard is showing
    if (newWindowHeight < this.state.windowHeight) {
      const keyboardHeight = this.state.windowHeight - newWindowHeight;
      this.setState({
        keyboardShowing: { height: keyboardHeight },
        windowHeight: newWindowHeight,
      });
    } else {
      // Keyboard is hidden
      this.setState({
        keyboardShowing: null,
        windowHeight: newWindowHeight,
      });
    }
  }

  render() {
    const emptySpaceStyle = styles.getEmptySpace(this.state.keyboardShowing);
    return <div style={emptySpaceStyle}></div>;
  }
}