import React from 'react';
import "../../setup";
import {TopMenu} from "../../../components";
import renderer from 'react-test-renderer';
import {render, fireEvent, wait} from 'react-testing-library';

var menus=[{link:"/", linkText:"home"}];
var decodeHTML=function(str) {
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
		};

test("Test by snapshot",()=>{

    const topMenu=renderer.create(
      <TopMenu menus={menus}/>
    );
    let tree=topMenu.toJSON();
    expect(tree).toMatchSnapshot();
});
test("Test by html",()=>{
    const {getByText,getByTestId,container}=render(
      <TopMenu menus={menus}/>
    );
    const elem=getByTestId('mobile-to-open-menu');
    expect(elem.innerHTML).toBe(decodeHTML('&#9776;'));

});
