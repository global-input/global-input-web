import React  from 'react';

import DisplayContent from "../../components/display-text/DisplayContent";


const renderInfoContent=  ({dataitem}) => (<DisplayContent content={dataitem.value}/>);
export default renderInfoContent;
