import React from 'react';
import appTextConfig from "../configs/appTextConfig";
import menusConfig from "../configs/menusConfig";
import ViewWithTabMenu from "../components/menu/ViewWithTabMenu";


const NotAuthorizedView=  ({menuItems})=>(
             <ViewWithTabMenu
               title={appTextConfig.notAuthorized.title}
               menuItems={menuItems} selected={menusConfig.eye.menu}
               content={appTextConfig.notAuthorized.content}/>
);


export default NotAuthorizedView;