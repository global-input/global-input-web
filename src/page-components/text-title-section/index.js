import React from 'react';
import {styles} from './styles';
import AdjustableComponent from "../../components/adjustable-component";
export default class TextTitleSection extends AdjustableComponent {

    render(){
          return(<div style={styles.headerSection.get()}>
                    <div style={styles.title.get()}>{this.props.title}</div>
                    <div style={styles.subtitle.get()}>{this.props.subtitle}</div>
                    {this.props.children}
        </div>);
      }
};
