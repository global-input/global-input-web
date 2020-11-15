import React,{useState} from 'react';
import {useMobile} from '../mobile';
import QRCode from "qrcode.react";
import  './no-print.css';
import {P,A} from '../app-layout';


const GenerateQRCode = ({content, label,back}) => {
    const [size,setSize]=useState(300);
    const [level,setLevel]=useState('H');

    const mobile=useMobile(
        {
            action:"input",
            dataType:"form",
            form:{
            title:"QR Code Generated",
            fields:Object.values(FIELDS)
        }
    });

    mobile.setOnchange(({field})=>{
            switch(field.id){
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

        return(
        <mobile.ControlledContainer title="Mobile Encryption" domain="">
                    <P>{label}</P>
                    <QRCode value={content} level={level} size={size}/>
                    <P>Scan with <A href="https://globalinput.co.uk/">Global Input App</A></P>
        </mobile.ControlledContainer>


        )


};


const FIELDS = {
    size:{
        id:"size",
        label:"Size",
        value:300,
        type:"range",
        minimumValue:100,
        maximumValue:1000,
        step:10
    },
    level:{
        id:"level",
        label:"Level",
        type:"list",
        selectType:"single",
        value:"H",
        items:[
            {value:"L", label:"Low"},
            {value:"M", label:"Medium"},
            {value:"Q", label:"Quality"},
            {value:"H", label:"High"}
        ]
    },
    back:{
        id:"back",
        type:"button",
        label:"Back",
        icon:"back",
        viewId:"footer"
    },
    print:{
        id:"print",
        type:"button",
        label:"Print",
        icon:"print",
        viewId:"footer",
    },
    info:{
        id:"info",
        type:'info',
        value:'The connected application should be displaying a QR Code with the content received from your mobile.'
    }
};

export default GenerateQRCode;