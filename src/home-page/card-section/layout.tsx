import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import authenticationImage from "./images/authentication.svg";
import mobileControlImage from "./images/control.svg";
import secondScreenImage from "./images/second-screen.svg";
import encryptionImage from "./images/encryption.png";
import mobilePersonStorageImage from "./images/personal-storage.png";
import mobileContentTransferImage from "./images/transfer.png";
import arrow from "./images/arrow.svg";

const Icon = styled.img`
  margin-top: 20px;
`;

export const AuthenticationIcon = styled(Icon).attrs({
  src: authenticationImage,
  alt: "Authentication Icon",
})``;

export const ControlIcon = styled(Icon).attrs({
  src: mobileControlImage,
  alt: "Mobile Control Icon",
})``;

export const SecondScreenIcon = styled(Icon).attrs({
  src: secondScreenImage,
  alt: "Second Screen Icon",
})``;

export const EncryptionIcon = styled(Icon).attrs({
  src: encryptionImage,
  alt: "Encryption Icon",
})``;

export const StorageIcon = styled(Icon).attrs({
  src: mobilePersonStorageImage,
  alt: "Storage Icon",
})``;

export const TransferIcon = styled(Icon).attrs({
  src: mobileContentTransferImage,
  alt: "Transfer Icon",
})``;

const ArrowImage = styled.img.attrs({
  src: arrow,
  alt: "Arrow",
})``;

export const Title = styled.div`
      font-size: 20px;
      margin-top:20px;
      @media only screen and (min-width:300px){
        font-size: 25px;
      @media only screen and (min-width:600px){
        font-size: 20px;
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  background-color: #ffffff;
  color: #5291cd;
  height: 250px;
  border-radius: 5px;

  margin-top: 10px;
  margin-bottom: 50px;

  width: 95%;
  padding-bottom: 30px;
  max-width: 330px;
  text-decoration: none;

  transition: all 0.15s ease-out;

  &: hover {
    box-shadow: 0 0 30px #0003;
    transform: translateY(-3px);
    transition: all 0.15s ease-out;
    text-decoration: none;
  }

  @media only screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  font-size: 14px;
  width: 90%;
`;

export const Footer = styled.div`
  width: 100%;
  color: #a8a8a8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const MoreText = styled.div`
  color: #5291cd;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  text-decoration: none;
  white-space: nowrap;
  font-size: 15px;
`;

export const More = () => (
  <MoreText>
    {" "}
    MORE <ArrowImage />
  </MoreText>
);

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 780px;

  @media only screen and (min-width: 800px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;
  }

  @media only screen and (min-width: 1400px) {
    max-width: 1200px;
  }
`;
