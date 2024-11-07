import React, { Component, PureComponent } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Image,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from 'react-native';

import { styles } from "../styles";
import { appdata, store } from "../../store";


import { images, manageFormDataTextConfig, menusConfig } from "../../configs";

import { IconButton, TextFieldWithDone, DisplayHeader } from "../../components";





export default class ListFormLabelsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = this.getStateFromProps(this.props);
  }
  getStateFromProps(props) {
    return { showSearch: false };
  }
  onBlur() {
    this.props.onSearchLooseFocus();
    this.setState({ showSearch: false });

  }
  onFocus() {
    this.setState({ showSearch: true })
  }

  render() {
    if (this.state.showSearch) {
      return this.renderWithSearchField();
    }
    else {
      var action = this.props.action;
      if (action.filterString) {
        return this.renderFilterString();
      }
      else if ((action.items && action.items.length > 3) || action.filterString) {
        return this.renderWithSearchButton();
      }
      else {
        console.log("render without search");
        return this.renderWithoutSearchButton();
      }
    }
  }

  renderFilterString() {
    return (

      <DisplayHeader>
        <View style={styles.leftHeader}>
          <IconButton image={menusConfig.search.menu.image} onPress={this.displaySearchField.bind(this)} />
          <View style={styles.searchStringContainer}>
            <TouchableHighlight onPress={this.displaySearchField.bind(this)}>
              <Text style={styles.searchString}>{this.props.action.filterString}</Text>
            </TouchableHighlight>
          </View>

        </View>
        <View style={styles.leftHeader}>

          <Text style={styles.titleText} allowFontScaling={false}>{manageFormDataTextConfig.searchResult.title}</Text>
        </View>
      </DisplayHeader>
    );
  }

  displaySearchField() {
    this.setState({ showSearch: true });
    setTimeout(() => {
      if (this.searchField) {
        this.searchField.focus();
      }
    }, 200);
  }
  renderLabelSwitch() {
    return (
      <View style={styles.headerItem}>
        <IconButton image={menusConfig.manageFormData.menu.image} onPress={this.props.toList} />
      </View>
    );
  }
  renderWithSearchButton() {
    return (
      <DisplayHeader>

        <View style={styles.headerItem}>
          <IconButton image={menusConfig.search.menu.image} onPress={this.displaySearchField.bind(this)} />

          <View style={styles.searchStringContainer}>
            <TouchableHighlight onPress={this.displaySearchField.bind(this)}>
              <Text style={styles.searchString}>{this.props.action.filterString}</Text>
            </TouchableHighlight>
          </View>

        </View>
        <View style={styles.headerItem}>
          <Text style={styles.titleText} allowFontScaling={false}>{this.props.title}</Text>
        </View>
        {this.renderLabelSwitch()}

      </DisplayHeader>
    );
  }
  renderWithoutSearchButton() {
    return (
      <DisplayHeader>

        <View style={styles.headerItem}>


          <View style={styles.searchStringContainer}>
            <TouchableHighlight onPress={this.displaySearchField.bind(this)}>
              <Text style={styles.searchString}>{this.props.action.filterString}</Text>
            </TouchableHighlight>
          </View>

        </View>
        <View style={styles.headerItem}>
          <Text style={styles.titleText} allowFontScaling={false}>{this.props.title}</Text>
        </View>
        {this.renderLabelSwitch()}

      </DisplayHeader>
    );
  }
  renderWithSearchField() {
    return (
      <DisplayHeader>
        <View style={styles.searchBlockItemContainer}>
          <TextFieldWithDone
            placeholder={manageFormDataTextConfig.searchField.label}
            autoCapitalize={'none'}
            value={this.props.action.filterString}
            onChangeTextValue={this.props.onChangeFilterString}
            onBlur={this.onBlur.bind(this)}
            onFocus={this.onFocus.bind(this)}
            ref={(searchField) => { this.searchField = searchField }}
          />
        </View>
      </DisplayHeader>
    );

  }


}
