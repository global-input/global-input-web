import React from 'react'

import {styles} from "./styles";
import TopHeaderSection from "../../top-header-section";

const BasicLayout=props=>(
            <div style={styles.content} id="topContent">
                    <TopHeaderSection  selected={props.selected}/>
                    {props.children}
            </div>
            );
export default BasicLayout;
