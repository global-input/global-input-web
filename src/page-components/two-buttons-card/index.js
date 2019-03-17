import React from 'react';
import {styles} from './styles';

import {withResponsiveComponent} from '../../components/screen-media';
import {WhiteRoundButton,BlueRoundButton} from '../round-buttons';
const TwoButtonsCard=props=>(
      <div style={styles.card.get()}>
          <div style={styles.title}>{props.data.title}</div>
          <div style={styles.content.get()}>
              {props.data.content}
          </div>
          <div style={styles.footer.get()}>
              <BlueRoundButton to={props.data.buttons[0].path}>{props.data.buttons[0].label}</BlueRoundButton>
              <WhiteRoundButton to={props.data.buttons[1].path}>{props.data.buttons[1].label}</WhiteRoundButton>
          </div>
      </div>
    );
const ResponsiveTwoButtonsCard=withResponsiveComponent(TwoButtonsCard);
export default ResponsiveTwoButtonsCard;
