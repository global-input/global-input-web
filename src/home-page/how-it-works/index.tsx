import React from 'react';
import styled from 'styled-components';
import one from './images/1.svg';
import two from './images/2.svg';
import three from './images/3.svg';

import oneSmall from './images/small/1.svg';
import twoSmall from './images/small/2.svg';
import threeSmall from './images/small/3.svg';



import extensionImage from './images/extension.svg';
import extensionImageSmall from './images/small/extension.svg';
import qrCodeImage from './images/qrcode.png';
import qrCodeImageSmall from './images/small/qrcode.png';
import mobileImage from './images/mobile.svg';



export const HowItWorks = () => (
    <Container>
        <Title>How It Works</Title>
        <Content>
            <Row>
                <StepOne>
                    <Extension>
                        <Footer>
                            <Text>Install Extension</Text>
                        </Footer>
                    </Extension>
                </StepOne>
                <StepTwo>
                    <QrCode>
                        <Footer>
                            <Text>Scan QR Code</Text>
                        </Footer>
                    </QrCode>
                </StepTwo>
                <StepThree>
                    <MobileDevice>
                        <Footer>
                            <Text>Operate with Mobile</Text>
                        </Footer>
                    </MobileDevice>
                </StepThree>
            </Row>
        </Content>
    </Container>

);


const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 40px;
    width: 100%;
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding-top: 50px;
    align-items:center;
    width:100%;
    @media only screen and (min-width:600px){
        width:500px;
    }

    @media only screen and (min-width:700px){
        width:600px;
    }
    @media only screen and (min-width:800px){
        width:700px;
    }
    @media only screen and (min-width:900px){
        width:800px;
    }

    @media only screen and (min-width:1024px){
        width:900px;
    }

`;
const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width:100%;
    @media only screen and (min-width:600px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;
const Step = styled.div`
    display: flex;
    background-repeat: no-repeat;
    background-position: 50px 50px;
    position: relative;
    width:  150px;
    height: 180px;
    @media only screen and (min-width:1024px){
        width:  200px;
        height: 230px;
    }
`;

const NoDigit=styled(Step)`
    background-position: 10px 70px;
`;

const StepOne = styled(NoDigit)`
    background-image: url(${oneSmall});
    background-position: 20px 85px;
    top:-50px;
    left:10px;
    @media only screen and (min-width:1024px){
        background-image: url(${one});
        background-position: 10px 70px;
    }
    @media only screen and (min-width:600px){
        top:0;
        left:0;
    }
`;
const StepTwo = styled(NoDigit)`
    background-image: url(${twoSmall});
    background-position: 15px 38px;
    top:-120px;
    left:110px;
    @media only screen and (min-width:1024px){
        background-image: url(${two});
        background-position: 15px 15px;
    }
    @media only screen and (min-width:600px){
        top:0;
        left:0;
    }

`;
const StepThree = styled(NoDigit)`
    background-image: url(${threeSmall});
    background-position: 35px 33px;
    top:-160px;
    left:150px;
    @media only screen and (min-width:300px){
        top:-200px;
        left:190px;
    }
    @media only screen and (min-width:600px){
        top:0;
        left:0;
    }
    @media only screen and (min-width:1024px){
        background-image: url(${three});
        background-position: 10px 10px;
    }

`;


const Extension = styled(Step)`
    background-image: url(${extensionImageSmall});
    background-position: 35px 70px;
    @media only screen and (min-width:1024px){
        background-image: url(${extensionImage});
        background-position: 50px 50px;
    }
`;



const QrCode = styled(Step)`
   background-image: url(${qrCodeImageSmall});
   background-position: 35px 70px;
   @media only screen and (min-width:1024px){
    background-image: url(${qrCodeImage});
    background-position: 50px 50px;
   }
`;
const MobileDevice=styled(Step)`
    background-image: url(${mobileImage});
`;


const Footer = styled.div`
    margin: 10;
    color: white;
    white-space: nowrap;
    position:absolute;
    left:0;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    bottom:10px;
    font-size: 15px;
    @media only screen and (min-width:1024px){
        bottom:50px;
        font-size: 20px;
    }
`;
const Text = styled.div`

`;