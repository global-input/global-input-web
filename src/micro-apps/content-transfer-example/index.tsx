import React, { useState } from "react";
import styled from 'styled-components';
import { useConnectMobile,ConnectWidget } from './mobile-ui';




const App: React.FC = () => {
  const [content, setContent] = useState('');
  const {mobile,onContentChanged} = useConnectMobile({setContent});

  const copyToClipboard = () => {
      navigator.clipboard.writeText(content);
  }

  return (
    <Container>
      <Title>A Mobile Interoperability Example</Title>
      <SourceCodeLink>source code</SourceCodeLink>
      <ConnectWidget mobile={mobile}/>
      <Form>
        <TextArea id="textContent" onChange={(evt: any) => {
            setContent(evt.target.value);
            onContentChanged(evt.target.value);
          }} value={content} />
          <Button  onClick={copyToClipboard}>Copy</Button>


      <Text>This example application serves as a 'Hello World' example of how to use the <LibraryLink>global-input-react</LibraryLink> library to achieve the mobile interoperability.
            </Text>

      </Form>

    </Container>
  );

};


export default App;


export const Container =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    width:100%;
`;

const Title=styled.div`
font-size: 12px;
    color: #445566;
    font-family: Georgia, Times, Serif;


    @media screen and (min-height:150px){
        font-size:26px;
    }

    @media screen and (min-height:400px){
        font-size:32px;
        margin-bottom:10px;
    }
    @media print{
        display:none;
    }
`;


const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;

    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    display:flex;
    min-width:50px;

    max-width: 200px;
    margin-left:5px;
    margin-right:5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;

    &: hover{
        transform: translateY(-3px);
        box-shadow: 0 0 50px #ffff;
    }

`;


export const TextArea = styled.textarea`
    display: block;
    line-height: 2em;
    border:1pxz solid red;
    margin: 0;
    padding-left: 10px;
    font-size: medium;
    border: 2px solid rgb(230,230,230);
    background-color: rgb(249,249,249);
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 500;
    &:focus {
        border: 1px solid #2c7ac9;
    }

    width:100%;

    height:100px;
`;

export const Form = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
    width:90%;
    width:90%;
    overflow: scroll;
    max-width:700px;
`;



const Text=styled.div`
    font-size: 16px;
`;

const A=styled.a`
   color: #153E85;
    font-weight: 100;
    font-family: Georgia, Times, Serif;
`;

const SourceCodeLink=styled(A).attrs({
  href:'https://github.com/global-input/content-transfer-example',
  rel:'noreferrer noopener',
  target:'_blank'})``;


const LibraryLink=styled(A).attrs({
    href:'https://github.com/global-input/global-input-react',
    rel:'noreferrer noopener',
    target:'_blank'})``;