// ListFormLabelsHeader.js

import React, { useState, useRef } from 'react';
import styled from 'styled-components';


import manageFormDataTextConfig from '../../../configs/manageFormDataTextConfig';
import menusConfig from '../../../configs/menusConfig';
import IconButton from '../../components/buttons/IconButton';
import TextFieldWithDone from '../../components/input/TextFieldWithDone';
import DisplayHeader from '../../components/menu/DisplayHeader';

const ListFormLabelsHeader = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const searchFieldRef = useRef(null);

  const displaySearchField = () => {
    setShowSearch(true);
    setTimeout(() => {
      if (searchFieldRef.current) {
        searchFieldRef.current.focus();
      }
    }, 200);
  };

  const onBlur = () => {
    props.onSearchLooseFocus();
    setShowSearch(false);
  };

  const onFocus = () => {
    setShowSearch(true);
  };

  const renderFilterString = () => (
    <DisplayHeader>
      <LeftHeader>
        <IconButton image={menusConfig.search.menu.image} onPress={displaySearchField} />
        <SearchStringContainer>
          <ClickableText onClick={displaySearchField}>{props.action.filterString}</ClickableText>
        </SearchStringContainer>
      </LeftHeader>
      <LeftHeader>
        <TitleText>{manageFormDataTextConfig.searchResult.title}</TitleText>
      </LeftHeader>
    </DisplayHeader>
  );

  const renderLabelSwitch = () => (
    <HeaderItem>
      <IconButton image={menusConfig.manageFormData.menu.image} onPress={props.toList} />
    </HeaderItem>
  );

  const renderWithSearchButton = () => (
    <DisplayHeader>
      <HeaderItem>
        <IconButton image={menusConfig.search.menu.image} onPress={displaySearchField} />
        <SearchStringContainer>
          <ClickableText onClick={displaySearchField}>{props.action.filterString}</ClickableText>
        </SearchStringContainer>
      </HeaderItem>
      <HeaderItem>
        <TitleText>{props.title}</TitleText>
      </HeaderItem>
      {renderLabelSwitch()}
    </DisplayHeader>
  );

  const renderWithoutSearchButton = () => (
    <DisplayHeader>
      <HeaderItem>
        <SearchStringContainer>
          <ClickableText onClick={displaySearchField}>{props.action.filterString}</ClickableText>
        </SearchStringContainer>
      </HeaderItem>
      <HeaderItem>
        <TitleText>{props.title}</TitleText>
      </HeaderItem>
      {renderLabelSwitch()}
    </DisplayHeader>
  );

  const renderWithSearchField = () => (
    <DisplayHeader>
      <SearchBlockItemContainer>
        <TextFieldWithDone
          placeholder={manageFormDataTextConfig.searchField.label}
          autoCapitalize="none"
          value={props.action.filterString}
          onChangeTextValue={props.onChangeFilterString}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={searchFieldRef}
        />
      </SearchBlockItemContainer>
    </DisplayHeader>
  );

  const action = props.action;

  if (showSearch) {
    return renderWithSearchField();
  } else {
    if (action.filterString) {
      return renderFilterString();
    } else if ((action.items && action.items.length > 3) || action.filterString) {
      return renderWithSearchButton();
    } else {
      console.log('render without search');
      return renderWithoutSearchButton();
    }
  }
};

export default ListFormLabelsHeader;

// Styled Components

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
  display: flex;
  align-items: center;
  margin-left: 5px;
  border-bottom: 1px solid white;
`;

const ClickableText = styled.span`
  color: #ffffff;
  cursor: pointer;
`;

const TitleText = styled.h2`
  color: #ffffff;
  font-size: 18px;
  margin: 0;
`;

const SearchBlockItemContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;