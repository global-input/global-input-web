import React from 'react';
import {styles} from './styles';
import AdjustableComponent from '../../components/adjustable-component';

export default class BacicsCardsContainer extends AdjustableComponent{
    render(){
        return(
          <div style={styles.cardContainer.get()}>
              {this.props.children}
          </div>
        );
    }
}
