import React, { useState } from 'react';
import styled from 'styled-components';
import { useMobile } from '../../mobile';
import {QRCodeSVG} from "qrcode.react";
import { AppScanInstruction, AppQROverlay } from 'mobile';
import {Footer, DarkButton,AppContainer,MoreInfo} from '../../components';


export const GenerateQRCode = ({ content, label, back }) => {
    const [size, setSize] = useState(300);
    const [level, setLevel] = useState('H');
    const [showGlobalInputQRCode, setShowGlobalInputQRCode] = useState(false);
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
                if (field.value !== undefined) {
                    setSize(field.value as number);
                }
                break;
            case FIELDS.level.id:
                if (field.value !== undefined) {
                    if(Array.isArray(field.value)){
                        if(field.value.length>0){
                            setLevel(field.value[0] as string);
                        }
                        else{
                            setLevel('H');
                        }                        
                    }
                    else{                        
                    setLevel(field.value as string);

                    }   
                    
                }
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
    const handleGlobalInputAppClick=()=>{
        setShowGlobalInputQRCode(true);
    };
    const handleOverlayClick = () => {
        setShowGlobalInputQRCode(false);
      };
      const stopPropagation = (e: React.MouseEvent) => {
          e.stopPropagation();
        };
    

    return (
        <AppContainer>
                        <MoreInfo>QR Code generated from the content received from your mobile app:</MoreInfo>


            <ContentLabel>{label}</ContentLabel>
            {content ? (
                <QRCodeSVG value={content} level={level as 'L' | 'M' | 'Q' | 'H'} size={size} />
            ) : (
                <div>No content to generate QR code</div>
            )}
            
            <AppScanInstruction 
                    onGlobalInputAppClick={handleGlobalInputAppClick}
                    variant="button"
                  />
            <AppQROverlay
  showOverlay={showGlobalInputQRCode}
  onOverlayClick={handleOverlayClick}
  onContainerClick={stopPropagation}
  qrValue={"https://globalinput.co.uk/global-input-app/mobile-app"}
/>      

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