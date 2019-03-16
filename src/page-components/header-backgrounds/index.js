import React, {Component} from 'react';
import {styles} from "./styles";
import AdjustableComponent from "../../components/adjustable-component";

const SimpleHeaderBackground=props=>(<div style={styles.headerContainer.get()}>{props.children}</div>);

const HomeHeaderBackground =props=>(<div style={styles.homeHeaderContainer.get()}>{props.children}</div>);

export  {SimpleHeaderBackground,HomeHeaderBackground};
