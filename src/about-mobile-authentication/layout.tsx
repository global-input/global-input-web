import React from 'react';
import styled from 'styled-components';

import { PageHeader } from '../page-header';
import {PageFooter} from '../page-footer';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height:100vh;
  background-color: rgba(169, 200, 230, 0.3);

`;


export const PageContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items:center;
        background-color: rgba(169, 200, 230, 0.3);
        width: 100%;
        min-height: ${window.innerHeight}px;
        color: #5291CD;
        padding-top: 100px;
        position: relative;
`;

export const PageContent = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: "center";
        flex: 1;
        margin-top: 70px;
        max-width: 1000px;

`;

export const Title = styled.div`
    font-size:28px;
`;

export const TitleRow = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
`;

export const Row = styled.div`

flex-direction: row;
display:flex;
align-items:start;
@media (max-width: 1000px){
    flex-direction: column;
    align-items:center;
}
`;



export const Column = styled.div`
 flex: 1;
`;


interface Image {
    alt: string;
    src: string;
    width: number;
    height: number;
}

interface Props {
    selected: string;
    title: string;
    image: Image;

}


export const Page: React.FC<Props> = ({ selected, title, children, image }) => (
    <PageContainer id="top">
        <PageHeader selected={selected} />
        <PageContent>
            <Row>
                <Column>
                    <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </Column>
                <Column collapse='xs'>
                    <TitleRow>
                        <Title>{title}</Title>
                    </TitleRow>
                    {children}
                </Column>
            </Row>
        </PageContent>
        <PageFooter />
    </PageContainer>
);




export const Items = styled.div``;
const Itm = styled.div`
    margin-top: 10px;
    margin-bottom:10px;
    display:flex;
    flex-direction:row;
`;
const Icon = styled.div`
    margin-right: 10px;
`;
const ItmText = styled.div``;


interface ItemProps {
    image: Image;
}
export const Item: React.FC<ItemProps> = ({ image, children }) => (
    <Itm>
        <Icon>
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </Icon>
        <ItmText>
            {children}
        </ItmText>



    </Itm>
)
