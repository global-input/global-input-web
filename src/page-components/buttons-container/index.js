import React from 'react';
import {styles} from './styles';
import AdjustableComponent from '../../components/adjustable-component';
export default class ButtonsContainer extends AdjustableComponent{
  render(){
    return (<div style={styles.buttonsContainer.get()}>{this.props.children}</div>)
  }
}
