import React from 'react';
import {Container,Title,Content, Row,
    StepOne,StepTwo,StepThree,Extension, QrCode,MobileDevice, Footer,Text} from './layout';

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
