import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableHighlight,
  Alert,
  Switch,
  Linking
} from 'react-native';
import {styles} from './styles';
import DisplayContent from "./DisplayContent";

export default class DisplayBlockText extends Component {
  renderTitle(){
      if(this.props.title){
          return (
              <Text style={styles.blockTitle}>{this.props.title}</Text>
          );
      }
      else{
        return null;
      }

  }

  render(){
        if(this.props.content){
                return(
                  <View style={styles.textBlockContainer}>
                    {this.renderTitle()}
                    <DisplayContent content={this.props.content} contentTextStyle={styles.blockContentText}/>                    
                  </View>
                );
        }
        else{
          return null;
        }


   }
}
