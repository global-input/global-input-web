import React from 'react';
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import "bootstrap/dist/css/bootstrap.min.css";

import AddNewFieldDialog from '../../src/examples/transfer-form-data-example/add-new-field-dialog';





storiesOf('AddNewFieldDialog', module)
  .addDecorator(story => <div style={{ textAlign: 'center', marginTop:100 }}>{story()}</div>)
  .add('withoutParameter',()=>(

              <AddNewFieldDialog/>

    ));
