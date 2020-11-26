import React from 'react';
import { styles } from './styles';

import { withResponsiveComponent } from '../../app-layout/screen-media';
import { BlueRoundButton } from '../round-buttons';
const TwoButtonsCard = props => (
    <div style={styles.card.get()}>
        <div style={styles.title}>{props.data.title}</div>
        <div style={styles.content.get()}>
            {props.data.content}
        </div>
        <div style={styles.footer.get()}>
            <BlueRoundButton to={props.data.buttons[0].path}>{props.data.buttons[0].label}</BlueRoundButton>
        </div>
    </div>
);
const ResponsiveTwoButtonsCard = withResponsiveComponent(TwoButtonsCard);
export default ResponsiveTwoButtonsCard;
