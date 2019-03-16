import React from 'react';
import {styles} from './styles';
import AdjustableComponent from "../../../components/adjustable-component";
export default class FeatureRow extends AdjustableComponent {
    render(){
          return(<div style={styles.row.get()}>
                    {this.props.children}
        </div>);
      }
};
