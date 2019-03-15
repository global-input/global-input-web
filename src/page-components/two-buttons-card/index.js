import React from 'react';
import {styles} from './styles';
import AdjustableComponent from '../../components/adjustable-component';
import {WhiteRoundButton,BlueRoundButton} from '../round-buttons';
export default class TwoButtonsCard extends AdjustableComponent{
  render(){
    return(
      <div style={styles.card.get()}>
          <div style={styles.title}>{this.props.data.title}</div>
          <div style={styles.content.get()}>
              {this.props.data.content}
          </div>
          <div style={styles.footer.get()}>
              <BlueRoundButton to={this.props.data.buttons[0].path}>{this.props.data.buttons[0].label}</BlueRoundButton>
              <WhiteRoundButton to={this.props.data.buttons[1].path}>{this.props.data.buttons[1].label}</WhiteRoundButton>
          </div>
      </div>
    );
  }

}
