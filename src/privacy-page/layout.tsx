import styled from "styled-components";
import backgroundImage from "./images/background.svg";

export const Background = styled.div`
  background-color: rgb(114, 164, 210);
  @media only screen and (min-width: 880px) {
    background-color: white;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  @media only screen and (min-width: 1900px) {
    background-size: 150%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
  min-height: 100vh;
  padding: 100px 8vw 0 8vw;
  @media only screen and (min-width: 880px) {
    padding-left: 20vw;
    padding-right: 20vw;
  }
`;

export const Content = styled.div`
  color: white;
`;

export const Title = styled.div`
  font-size: 65px;
  font-weight: 900;
  padding-bottom: 50px;
  line-height: 65px;

  @media only screen and (max-width: 1258px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

export const P = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
  color: #fffe;
`;

export const ContactInfo = styled.div`
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.6;
`;

export const ContactItem = styled.div`
  margin-bottom: 10px;
  a {
    color: #fffe;
    text-decoration: underline;
  }
`;