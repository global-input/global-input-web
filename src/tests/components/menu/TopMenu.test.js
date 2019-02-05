import React from 'react';
import "../../setup";
import {TopMenu} from "../../../components";
import renderer from 'react-test-renderer';
test("Test building menu",()=>{
    var menus=[{link:"/", linkText:"home"}];
    const topMenu=renderer.create(
      <TopMenu menus={menus}/>
    );
    let tree=topMenu.toJSON();
    expect(tree).toMatchSnapshot();
})
