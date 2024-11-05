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
  Switch
} from 'react-native';
import {styles} from './styles';

export default class NotificationText extends Component {

  render(){
        if(this.props.message){
          var textStyle=styles.notificationText;
          if(this.props.labelStyle==='light'){
            textStyle=styles.notificationTextLight;
          }
          return(
            <View style={styles.notificationContainer}>
                <Text style={textStyle}>{this.props.message}</Text>
            </View>
          );
        }
        else{
          return null;
        }

   }
}
