import React from 'react';

import {styles} from './styles';
export default class FeatureCard extends React.Component{

  render(){
    return(
      <div style={styles.card.get()}>
          <div style={styles.title}>{this.props.title}</div>
          <div style={styles.content.get()}>
              {this.props.content}
          </div>
          <div style={styles.footer.get()}>
            {this.props.tryItNow('TRY NOW')}
            {this.props.readMore('Read More')}
          </div>
      </div>
    );
  }

}
