import React from 'react';
import { useMobile } from './useMobile';
import styled from 'styled-components';
interface Props {
    back: () => void;
}
export const ParingApp: React.FC<Props> = ({ back }) => {
    const mobile = useMobile(initData);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.back.id:
                back();
                break;
            default:
        }
    });
    return (<Container>
        <mobile.PairingQR label="" />;
        <Footer>
            <Button onClick={back}>Back</Button>
        </Footer>
    </Container>)

}



const FIELDS = {
    info: {
        id: "info",
        type: "info",
        value: "Please scan the QR Code displayed to pair your mobile app with the application."
    },
    back: {
        id: 'back',
        type: 'button',
        label: 'Back',
        viewId: "row1"
    },



}

const initData = {
    form: {
        title: "Pairing",
        fields: Object.values(FIELDS)
    }
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
`;

const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 4px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    margin-left:20px;
    display:flex;
`;

const Footer = styled.div`
        display: flex;
        margin:0;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
`;