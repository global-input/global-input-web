import React from 'react';
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import ClipboardCopyButton from '../../src/components/clipboard-copy-button';





storiesOf('ClipboardCopyButton', module)
  .addDecorator(story => <div style={{ textAlign: 'center', marginTop:100 }}>{story()}</div>)
  .add('withoutParameter',()=>(

              <ClipboardCopyButton/>

    ));
