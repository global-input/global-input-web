import React from 'react';
import { styles } from './styles';
import { withResponsiveComponent } from '../../app-layout/screen-media';
export class ButtonsContainer extends React.Component {
  render() {
    return (<div style={styles.buttonsContainer.get()}>{this.props.children}</div>)
  }
}

const ResponveButtonsContainer = withResponsiveComponent(ButtonsContainer);

export default ResponveButtonsContainer;
