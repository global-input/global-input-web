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


export default class DisplayBlockTitle extends Component {

  render(){

            return(
                <View style={styles.blockTitleContainer}>
                  <Text style={styles.blockTitle}>{this.props.title}</Text>
                 </View>


            );

   }
}
