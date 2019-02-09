import React from 'react';
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import {TopMenu} from '../../components';




  var menus=[{link:"/home", linkText:"home"},
  {link:"/action", linkText:"action"},
  {link:"/help", linkText:"help"}];


  const ActionScreen=(props)=>(<div>Action Screen</div>);
const HomeScreen=(props)=>(<div>Home Screen</div>);
const HelpScreen=(props)=>(<div>Help Screen</div>);
storiesOf('TopMenu', module)
  .addDecorator(story => <div style={{ textAlign: 'center', marginTop:100 }}>{story()}</div>)
  .add('menu',()=>(
    <Router>
  	   <React.Fragment>
          <TopMenu menus={menus}/>
          <div>
              <Route  path={menus[0].link} component={HomeScreen}/>
              <Route  path={menus[1].link} component={ActionScreen}/>
              <Route  path={menus[2].link} component={HelpScreen}/>
          </div>
        </React.Fragment>

    </Router>
  ));
