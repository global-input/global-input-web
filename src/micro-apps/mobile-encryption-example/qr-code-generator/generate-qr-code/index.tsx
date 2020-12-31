import React, { useState } from 'react';
import styled from 'styled-components';
import { useMobile } from '../../mobile';
import QRCode from "qrcode.react";

import {Footer, DarkButton,AppContainer,MoreInfo} from '../../components';


export const GenerateQRCode = ({ content, label, back }) => {
    const [size, setSize] = useState(300);
    const [level, setLevel] = useState('H');
    const initData = {
        form: {
            title: "QR Code Generated",
            fields: Object.values(FIELDS)
        }
    }
    const mobile = useMobile(initData, true);
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.size.id:
                setSize(field.value as number);
                break;
            case FIELDS.level.id:
                setLevel(field.value as string);
                break;
            case FIELDS.back.id:
                back();
                break;
            case FIELDS.print.id:
                window.print();
                break;
            default:
        }
    });

    return (
        <AppContainer>
                        <MoreInfo>QR Code generated from the content received from your mobile app:</MoreInfo>


            <ContentLabel>{label}</ContentLabel>
            <QRCode value={content} level={level} size={size} />
            <QRCodeLabel>Scan with <LinkInLabel>Global Input App</LinkInLabel></QRCodeLabel>

            <Footer>
                <DarkButton onClick={back}>Back</DarkButton>
                <DarkButton onClick={() => {
                    window.print();
                }}>Print</DarkButton>
            </Footer>

        </AppContainer>

    )


};


const FIELDS = {
    size: {
        id: "size",
        label: "Size",
        value: 300,
        type: "range",
        minimumValue: 100,
        maximumValue: 1000,
        step: 10
    },
    level: {
        id: "level",
        label: "Level",
        type: "list",
        selectType: "single",
        value: "H",
        items: [
            { value: "L", label: "Low" },
            { value: "M", label: "Medium" },
            { value: "Q", label: "Quality" },
            { value: "H", label: "High" }
        ]
    },
    back: {
        id: "back",
        type: "button",
        label: "Back",
        icon: "back",
        viewId: "footer"
    },
    print: {
        id: "print",
        type: "button",
        label: "Print",
        icon: "print",
        viewId: "footer",
    },
    info: {
        id: "info",
        type: 'info',
        value: 'The connected application should be displaying a QR Code with the content received from your mobile.'
    }
};






const QRCodeLabel = styled.div`
    padding-top: 20px;
    color: #A9C8E6;

`;
const ContentLabel =styled.div`
    color: #153E85;
    font-weight: 100;
    font-family: Georgia, Times, Serif;
    font-size: 20px;
`;

const  LinkInLabel=styled.a.attrs({
    href:'https://globalinput.co.uk/',
    rel:"noopener noreferrer",
    target:"_blank"
})`
    font-weight: 50;
    color: #6666ff;
`;