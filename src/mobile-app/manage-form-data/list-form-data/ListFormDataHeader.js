// src/mobile-app/manage-form-data/list-form-data/ListFormDataHeader.js

import React, { useState, useRef } from 'react';

import searchIcon from '../../images/search.png';
import folderIcon from '../../images/folders-icon.png';

import { styles } from '../styles';


import IconButton from '../../components/buttons/IconButton';
import TextFieldWithDone from '../../components/input/TextFieldWithDone';
import DisplayHeader  from '../../components/menu/DisplayHeader';

const RenderTitleIcon = ({ titleIcon }) =>
  titleIcon ? (
    <img src={titleIcon} style={styles.titleIcon} alt="Title Icon" />
  ) : null;

const renderWithSearchField = ({
  filterString,
  onChangeFilterString,
  onBlur,
  onFocus,
  retrieveSearchFieldReference,
}) => (
  <DisplayHeader>
    <div style={styles.searchBlockItemContainer}>
      <TextFieldWithDone
        placeholder="Search forms"
        value={filterString}
        onChangeTextValue={onChangeFilterString}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={retrieveSearchFieldReference}
      />
    </div>
  </DisplayHeader>
);

const renderFilterString = ({ displaySearchField, filterString }) => (
  <DisplayHeader>
    <div style={styles.leftHeader}>
      <IconButton image={searchIcon} onPress={displaySearchField} />
      <div style={styles.searchStringContainer}>
        <div onClick={displaySearchField} style={{ cursor: 'pointer' }}>
          <span style={styles.searchString}>{filterString}</span>
        </div>
      </div>
    </div>
    <div style={styles.leftHeader}>
      <span style={styles.titleText}>{'Search Result'}</span>
    </div>
  </DisplayHeader>
);

const renderWithSearchButton = ({
  title,
  displaySearchField,
  filterString,
  titleIcon,
  toListLabels,
}) => (
  <DisplayHeader>
    <div style={styles.headerItem}>
      <IconButton image={searchIcon} onPress={displaySearchField} />
      <div style={styles.searchStringContainer}>
        <div onClick={displaySearchField} style={{ cursor: 'pointer' }}>
          <span style={styles.searchString}>{filterString}</span>
        </div>
      </div>
    </div>
    <div style={styles.headerItem}>
      <RenderTitleIcon titleIcon={titleIcon} />
      <span style={styles.titleText}>{title}</span>
    </div>
    <div style={styles.headerItem}>
      <IconButton image={folderIcon} onClick={toListLabels} />
    </div>
  </DisplayHeader>
);

const ListFormDataHeader = ({
  filterString,
  onChangeFilterString,
  onSearchLooseFocus,
  titleIcon,
  toListLabels,
  title,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const searchField = useRef(null);

  const retrieveSearchFieldReference = (ref) => (searchField.current = ref);

  const onBlur = () => {
    onSearchLooseFocus();
    setShowSearch(false);
  };

  const onFocus = () => {
    setShowSearch(true);
  };

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
      onBlur,
      onFocus,
      retrieveSearchFieldReference,
    });
  } else {
    if (filterString) {
      return renderFilterString({ displaySearchField, filterString });
    } else {
      return renderWithSearchButton({
        title,
        displaySearchField,
        filterString,
        titleIcon,
        toListLabels,
      });
    }
  }
};

export default ListFormDataHeader;