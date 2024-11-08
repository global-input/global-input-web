import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import searchIcon from '../../images/search.png';
import folderIcon from '../../images/folders-icon.png';


import IconButton from '../../components/buttons/IconButton';
import TextFieldWithDone from '../../components/input/TextFieldWithDone';
import DisplayHeader  from '../../components/menu/DisplayHeader';

const RenderTitleIcon = ({ titleIcon }) =>
  titleIcon ? (
    <TitleIcon src={titleIcon} alt="Title Icon" />
  ) : null;

const renderWithSearchField = ({
  filterString,
  onChangeFilterString,
  onBlur,
  onFocus,
  retrieveSearchFieldReference,
}) => (
  <DisplayHeader>
    <SearchBlockItemContainer>
      <TextFieldWithDone
        placeholder={'Search forms'}
        autoCapitalize={'none'}
        value={filterString}
        onChangeTextValue={onChangeFilterString}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={retrieveSearchFieldReference}
      />
    </SearchBlockItemContainer>
  </DisplayHeader>
);

const renderFilterString = ({ displaySearchField, filterString }) => (
  <DisplayHeader>
    <LeftHeader>
      <IconButton image={searchIcon} onClick={displaySearchField} />
      <SearchStringContainer>
        <ClickableText onClick={displaySearchField}>{filterString}</ClickableText>
      </SearchStringContainer>
    </LeftHeader>
    <LeftHeader>
      <TitleText>{'Search Result'}</TitleText>
    </LeftHeader>
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
    <HeaderItem>
      <IconButton image={searchIcon} onClick={displaySearchField} />
      <SearchStringContainer>
        <ClickableText onClick={displaySearchField}>{filterString}</ClickableText>
      </SearchStringContainer>
    </HeaderItem>
    <HeaderItem>
      <RenderTitleIcon titleIcon={titleIcon} />
      <TitleText>{title}</TitleText>
    </HeaderItem>
    <HeaderItem>
      <IconButton image={folderIcon} onClick={toListLabels} />
    </HeaderItem>
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

// Styled Components
const TitleIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const SearchBlockItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const SearchStringContainer = styled.div`
  margin-left: 8px;
`;

const ClickableText = styled.span`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;

const TitleText = styled.h2`
  font-size: 18px;
  margin: 0;
`;