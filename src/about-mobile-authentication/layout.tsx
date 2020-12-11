import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height:100vh;
  background-color: rgba(169, 200, 230, 0.3);

`;

export const Content=styled.div`
    display: flex;
    flex-direction: column;
    justifyContent: flex-start;
    alignItems: center;
    width:90%;
    margin:20px;
    flex:1;
    @media only screen and (min-width:1000px){
        width:900px;
    }
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
