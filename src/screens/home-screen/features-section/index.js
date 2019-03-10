import React from 'react';
import {styles} from './styles';
import FeatureCard from './feature-card';
import examples from '../../examples';
import screens from '../../../screens';

const textContent={
      secondScreenInput:{
            title:"Second Screen Input & Control",
            content:"Enable big screen device applications to have second screen experience, mobile input & control without developing separate mobile app."
      },

      authentication:{
            title:"Authentication Device Solution",
            content:"The mechanism allows users to carry out operations such as subscription, sign in, and changung passwords in public view without making any effort to type/hide/remember passwords."
      }
}
export default class FeaturesSection extends React.Component{

    render(){
      return(
            <div style={styles.container}>
                <div style={styles.title}>Try Our Features</div>
                <div style={styles.row.get()}>
                  <FeatureCard title={textContent.secondScreenInput.title} content={textContent.secondScreenInput.content}
                    tryItNow={examples.renderMediaPlayerExampleLink}
                    readMore={screens.readMore.secondScreen}/>
                  <FeatureCard title={textContent.authentication.title} content={textContent.authentication.content}
                    tryItNow={examples.renderMediaPlayerExampleLink}
                    readMore={screens.readMore.secondScreen}/>
                </div>
            </div>
      );

    }

}
