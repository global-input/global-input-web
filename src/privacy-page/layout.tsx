import styled from "styled-components";
import backgroundImage from "./images/background.svg";

export const Background = styled.div`
 min-height: 100vh;
 background-color: rgb(114, 164, 210);
 @media only screen and (min-width: 880px) {
   background-color: white;
   background-image: url(${backgroundImage});
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
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
  padding: 100px 8vw 100px 8vw; // Added padding-bottom
  background-color: #4984C4;
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

export const SubTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  padding: 40px 0 20px 0;
  line-height: 1.2;
  color: #fff;
`;

export const Address=styled.div`    
  
  
  margin-left: 50px;
`;
export const AddressLine=styled.div`    
  margin-bottom: 5px;
  
`;


export const P = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #fffe;
`;

export const ContactInfo = styled.div`  
  font-size: 18px;
  line-height: 1.6;
  margin: 20px 0 80px 20px;
`;

export const ContactItem = styled.div`
  margin-bottom: 15px;
  strong {
    color: #fff;
  }
  a {
    color: #fffe;
    text-decoration: underline;
    &:hover {
      color: #fff;
    }
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin: 0 0 30px 0;
  color: #fffe;
`;

export const BulletItem = styled.li`
  padding: 8px 0;
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  &:before {
    content: "•";
    padding-right: 15px;
    color: #fff;
  }
`;