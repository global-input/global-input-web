import React from 'react';
import DevelopersScreen from "./DevelopersScreen";
import {Route} from 'react-router-dom'
import {pagelinks} from "../configs";

class DeveloperRoute extends React.Component{
  render(){
    return(
      <React.Fragment>
          <Route  path={pagelinks.platform.link}  component={DevelopersScreen}/>
          <Route  path={pagelinks.platform.link2}  component={DevelopersScreen}/>
          <Route  path={pagelinks.platform.link3}  component={DevelopersScreen}/>
      </React.Fragment>
    );


  }

}
export {DevelopersScreen,DeveloperRoute};
