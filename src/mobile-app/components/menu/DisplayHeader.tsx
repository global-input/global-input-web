import React, { Component } from 'react';
import styled from 'styled-components';

interface DisplayHeaderProps {
  title?: string;
  titleIcon?: string;
  children?: React.ReactNode;
}

class DisplayHeader extends Component<DisplayHeaderProps> {
  renderTitleIcon() {
    const { titleIcon } = this.props;
    if (titleIcon) {
      return <TitleIcon src={titleIcon} alt="Title Icon" />;
    }
    return null;
  }

  render() {
    const { title, children } = this.props;

    return (
      <HeaderContainer>
        <CenterHeader>
          {this.renderTitleIcon()}
          {title ? (
            <TitleText>{title}</TitleText>
          ) : (
            children
          )}
        </CenterHeader>
      </HeaderContainer>
    );
  }
}

export default DisplayHeader;

// Styled Components
const HeaderContainer = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  text-align: center;

  @media (orientation: landscape) {
    padding: 10px;
    background-color: #444;
  }
`;

const CenterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TitleIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const TitleText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 0;

  @media (orientation: landscape) {
    font-size: 18px;
  }
`;