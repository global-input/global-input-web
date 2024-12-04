// src/mobile-app/manage-form-data/list-form-labels/ListFormLabelsHeader.js

import React, { Component } from 'react';
import { styles } from '../styles';


import manageFormDataTextConfig from '../../configs/manageFormDataTextConfig';
import menusConfig from '../../configs/menusConfig';


import IconButton from '../../components/buttons/IconButton';
import TextFieldWithDone from '../../components/input/TextFieldWithDone';
import DisplayHeader from '../../components/menu/DisplayHeader';

export default class ListFormLabelsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = this.getStateFromProps(this.props);
    // Create a ref for the search field
    this.searchField = React.createRef();
  }

  getStateFromProps(props) {
    return { showSearch: false };
  }

  onBlur() {
    this.props.onSearchLooseFocus();
    this.setState({ showSearch: false });
  }

  onFocus() {
    this.setState({ showSearch: true });
  }

  displaySearchField() {
    this.setState({ showSearch: true });
    setTimeout(() => {
      if (this.searchField.current) {
        this.searchField.current.focus();
      }
    }, 200);
  }

  renderLabelSwitch() {
    return (
      <div style={styles.headerItem}>
        <IconButton
          image={menusConfig.manageFormData.menu.image}
          onPress={this.props.toList}
        />
      </div>
    );
  }

  renderFilterString() {
    return (
      <DisplayHeader>
        <div style={styles.leftHeader}>
          <IconButton
            image={menusConfig.search.menu.image}
            onPress={this.displaySearchField.bind(this)}
          />
          <div style={styles.searchStringContainer}>
            <div
              onClick={this.displaySearchField.bind(this)}
              style={{ cursor: 'pointer' }}
            >
              <span style={styles.searchString}>
                {this.props.action.filterString}
              </span>
            </div>
          </div>
        </div>
        <div style={styles.leftHeader}>
          <span style={styles.titleText}>
            {manageFormDataTextConfig.searchResult.title}
          </span>
        </div>
      </DisplayHeader>
    );
  }

  renderWithSearchButton() {
    return (
      <DisplayHeader>
        <div style={styles.headerItem}>
          <IconButton
            image={menusConfig.search.menu.image}
            onPress={this.displaySearchField.bind(this)}
          />
          <div style={styles.searchStringContainer}>
            <div
              onClick={this.displaySearchField.bind(this)}
              style={{ cursor: 'pointer' }}
            >
              <span style={styles.searchString}>
                {this.props.action.filterString}
              </span>
            </div>
          </div>
        </div>
        <div style={styles.headerItem}>
          <span style={styles.titleText}>{this.props.title}</span>
        </div>
        {this.renderLabelSwitch()}
      </DisplayHeader>
    );
  }

  renderWithoutSearchButton() {
    return (
      <DisplayHeader>
        <div style={styles.headerItem}>
          <div style={styles.searchStringContainer}>
            <div
              onClick={this.displaySearchField.bind(this)}
              style={{ cursor: 'pointer' }}
            >
              <span style={styles.searchString}>
                {this.props.action.filterString}
              </span>
            </div>
          </div>
        </div>
        <div style={styles.headerItem}>
          <span style={styles.titleText}>{this.props.title}</span>
        </div>
        {this.renderLabelSwitch()}
      </DisplayHeader>
    );
  }

  renderWithSearchField() {
    return (
      <DisplayHeader>
        <div style={styles.searchBlockItemContainer}>
          <TextFieldWithDone
            placeholder={manageFormDataTextConfig.searchField.label}
            value={this.props.action.filterString}
            onChangeTextValue={this.props.onChangeFilterString}
            onBlur={this.onBlur.bind(this)}
            onFocus={this.onFocus.bind(this)}
            ref={this.searchField}
          />
        </div>
      </DisplayHeader>
    );
  }

  render() {
    if (this.state.showSearch) {
      return this.renderWithSearchField();
    } else {
      var action = this.props.action;
      if (action.filterString) {
        return this.renderFilterString();
      } else if (
        (action.items && action.items.length > 3) ||
        action.filterString
      ) {
        return this.renderWithSearchButton();
      } else {
        console.log('render without search');
        return this.renderWithoutSearchButton();
      }
    }
  }
}