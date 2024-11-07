import React, {useState, useRef} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';

import searchIcon from '../../images/search.png';
import folderIcon from '../../images/folders-icon.png';

import {styles} from '../styles';

import {IconButton, TextFieldWithDone, DisplayHeader} from '../../components';

const RenderTitleIcon = ({titleIcon}) =>
  titleIcon ? (
    <Image source={titleIcon} style={styles.titleIcon} />
  ) : null;

const renderWithSearchField = ({
  filterString,
  onChangeFilterString,
  onBlur,
  onFocus,
  retrieveSearchFieldReference
}) => (
  <DisplayHeader>
    <View style={styles.searchBlockItemContainer}>
      <TextFieldWithDone
        placeholder={'Search forms'}
        autoCapitalize={'none'}
        value={filterString}
        onChangeTextValue={onChangeFilterString}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={retrieveSearchFieldReference}
      />
    </View>
  </DisplayHeader>
);

const renderFilterString = ({displaySearchField, filterString}) => (
  <DisplayHeader>
    <View style={styles.leftHeader}>
      <IconButton image={searchIcon} onPress={displaySearchField} />
      <View style={styles.searchStringContainer}>
        <TouchableHighlight onPress={displaySearchField}>
          <Text style={styles.searchString}>{filterString}</Text>
        </TouchableHighlight>
      </View>
    </View>
    <View style={styles.leftHeader}>
      <Text style={styles.titleText} allowFontScaling={false}>
        {'Search Result'}
      </Text>
    </View>
  </DisplayHeader>
);
const renderWithSearchButton = ({
  title,
  displaySearchField,
  filterString,
  titleIcon,
  toListLabels
}) => (
  <DisplayHeader>
    <View style={styles.headerItem}>
      <IconButton image={searchIcon} onPress={displaySearchField} />
      <View style={styles.searchStringContainer}>
        <TouchableHighlight onPress={displaySearchField}>
          <Text style={styles.searchString}>{filterString}</Text>
        </TouchableHighlight>
      </View>
    </View>
    <View style={styles.headerItem}>
      <RenderTitleIcon titleIcon={titleIcon} />
      <Text style={styles.titleText} allowFontScaling={false}>
        {title}
      </Text>
    </View>
    <View style={styles.headerItem}>
      <IconButton image={folderIcon} onPress={toListLabels} />
    </View>
  </DisplayHeader>
);

export default ({
  filterString,
  onChangeFilterString,
  onSearchLooseFocus,
  titleIcon,
  toListLabels,
  title
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const searchField = useRef(null);
  const retrieveSearchFieldReference = ref => (searchField.current = ref);
  const onBlur = () => {
    onSearchLooseFocus();
    setShowSearch(false);
  };
  const onFocus = () => {
    setShowSearch(true);
  };;
  const onBlurretrieveSearchFieldReference= ref=>searchField.current=ref;
  const displaySearchField = () => {
    setShowSearch(true);

    setTimeout(() => {
      if (searchField.current) {
        searchField.current.focus();
      }
    }, 200);
  };

  if (showSearch) {
    return renderWithSearchField({
      filterString,
      onChangeFilterString,
      onFocus,
      onBlurretrieveSearchFieldReference,
      retrieveSearchFieldReference
    });
  } else {
    if (filterString) {
      return renderFilterString({displaySearchField, filterString});
    } else
      return renderWithSearchButton({
        title,
        displaySearchField,
        displaySearchField,
        filterString,
        filterString,
        titleIcon,
        toListLabels
      });
  }
};
