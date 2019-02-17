import React from 'react';
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import {AutoPlayVideo} from '../../src/components';
import {pagelinks,config, images} from "../../src/configs";



  var menus=[{link:"/home", linkText:"home"},
  {link:"/action", linkText:"action"},
  {link:"/help", linkText:"help"}];



storiesOf('AutoPlayVideo', module)
  .addDecorator(story => <div style={{ textAlign: 'center', marginTop:100 }}>{story()}</div>)
  .add('video',()=>(
        <React.Fragment>
        <AutoPlayVideo video={config.videos.tutorialPart1()} muted={true}/>
        <AutoPlayVideo video={config.videos.tutorialPart1()} muted={true}/>
        <AutoPlayVideo video={config.videos.tutorialPart1()} muted={true}/>
        </React.Fragment>
  ));
