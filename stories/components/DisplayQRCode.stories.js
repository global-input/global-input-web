import React from 'react';
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import {DisplayQRCode} from '../../src/components';





storiesOf('DisplayQRCode', module)
  .addDecorator(story => <div style={{ textAlign: 'center', marginTop:100 }}>{story()}</div>)
  .add('DisplayQRCode',()=>(<DisplayQRCode code="https://globalinput.co.uk"
  label="Scan with Global Input App"/>  ));
