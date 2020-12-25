
import React, { useState } from 'react';
import styled from 'styled-components';

import { InputWithLabel, FormContainer, FormFooter, TextButton, DisplayErrorMessage } from '../app-layout';
import { useMobile,ConnectWidget} from '../mobile';
import importEncryptOnMobileImage from './images/encrypt-on-mobile.png';

interface Props {
        back: () => void;
        next: (content: string, label: string) => void;
}
export const ContentLabel: React.FC<Props> = ({ back, next }) => {
        const [content, setContent] = useState('');
        const [label, setLabel] = useState('');
        const [expand,setExpand]=useState('');

        const initData = {
                dataType: "qrcode",
                form: {
                        title: "QR Code Content",
                        fields: Object.values(FIELDS)
                }
        }
        const mobile = useMobile(initData, true);

        const onLabelChanged = (label: string) => {
                setLabel(label);
                mobile.sendValue(FIELDS.label.id, content);
        }
        const onNext = () => {
                if (content.trim().length) {
                        next(content, label);
                }
        }
        mobile.setOnchange(({ field }) => {
                switch (field.id) {
                        case FIELDS.content.id:
                                setContent(field.value as string);
                                break;
                        case FIELDS.label.id:
                                setLabel(field.value as string);
                                break;
                        case FIELDS.back.id:
                                back();
                                break;
                        case FIELDS.next.id:
                                onNext();
                                break;
                        default:

                                break;
                }
        });
        return (
                <Container>
                        <AppTitle>Mobile Encryption</AppTitle>
                <SourceLink>Source Code</SourceLink>
                <Content>
                        <Title>Encrypt a content on your mobile</Title>
                        <ConnectWidget mobile={mobile}/>
                        {mobile.isConnected && (<>
                                <P>You can now press <EncryptOnMobileIcon/> button on your mobile to encrypt a piece of information. The mobile app sends
                                the encrypted content generated on your mobile to this application, which displays the received content in the following text box.</P>
                        <Form>
                                        <ContentInput content={content} setContent={content=>{
                                        setContent(content);
                                        mobile.sendValue(FIELDS.content.id, content);
                                }} expand={expand} setExpand={setExpand}/>
                                <LabelInput label={label} setLabel={label=>{
                                        setLabel(label);
                                        mobile.sendValue(FIELDS.label.id, label);
                                }} expand={expand} setExpand={setExpand}/>
                        </Form>

                            </>)}
                        <FormFooter>
                                <TextButton onClick={back} label='Back' />
                                {mobile.isConnected && (<TextButton onClick={onNext} label='Next' />)}
                        </FormFooter>
                </Content>






                </Container>


        );
};

const FIELDS = {
        content: {
                id: "content",
                label: "Content for the QR Code",
                value: ""
        },
        label: {
                id: "label",
                label: "Label for the QR Code",
                value: ""
        },
        back: {
                id: "back",
                label: "Back",
                type: "button",
                icon: "back",
                viewId: "foot"
        },
        next: {
                id: "next",
                label: "Next",
                type: "button",
                icon: "continue",
                viewId: "foot"
        },
        info: {
                type: 'info',
                value: 'You may press the "Encrypt" icon below to generate an encrypted content',
                viewId: 'info'
        }
};


const Container =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    backgroundColor: rgb(219,240,240);
`;


const P = styled.div`
    font-size: 16px;
`;


const AppTitle=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 1em;
    color: #445566;
    font-family: Georgia, Times, Serif;
    @media screen and (min-width:250px) and (min-height:250px){
        font-size:1.5em;
        margin-bottom:10px;
    }

    @media screen and (min-width:400px){
        font-size:2em;
    }
},`;
const Title=styled.div`
    color: #445566;
    font-family: Georgia, Times, Serif;
    font-size: 1em;
    @media screen and (min-width:250px) and (min-height:250px){
        font-size:1.4em;
    }
    @media screen and (min-width:400px){
            font-size:1.3em;
     }
`;

const SourceLink=styled.a.attrs({
        href:'https://github.com/global-input/mobile-encryption',
        rel:'noreferrer noopener',
        target:'_blank'})`
        color: #153E85;
        font-weight: 100;
        font-family: Georgia, Times, Serif;
        font-size: 0.8em;
        @media screen and (min-width:250px) and (min-height:250px){
            font-size:1em;
            margin-bottom:10px;
        }
        @media screen and (min-width:400px){
            font-size:1.5em;
        }

        `;

const Content=styled.div`
    width:95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start
    align-items: center;
    padding:10px;
`;

const EncryptOnMobileIcon=styled.img.attrs({
    src:importEncryptOnMobileImage,
    alt:'Encrypt'
})``;

const Form = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
    width:80vw;
    max-width:400px;
    height:65vh;
    max-height:450px;
    background-color:white;
    overflow: scroll;

`;


const Field = styled.div`
    position: relative;
    width:100%;
    padding-top:15px;


`;
const TextArea = styled.textarea`
    display: block;
    line-height: 2em;
    border:1pxz solid red;
    margin: 0;
    padding-left: 10px;
    width: 100%;
    height:100px;
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
    &:placeholder-shown + .control-label {
        visibility: hidden;
        z-index: -1;
        transition: 0.2s ease-in-out;

    }
    &:not(:placeholder-shown) + .control-label,
    .form-control:focus:not(:placeholder-shown) + .control-label {
        visibility: visible;
        z-index: 1;
        opacity: 1;
        transform: translateX(10px) translateY(-115px);
        transition: 0.2s ease-in-out transform;
        background-color:white;
    }
    width:100%;
`;

const Input = styled.input`
    display: block;
    line-height: 2em;
    border:1pxz solid red;
    margin: 0;
    padding-left: 10px;
    width: 100%;
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
    &:placeholder-shown + .control-label {
        visibility: hidden;
        z-index: -1;
        transition: 0.2s ease-in-out;

    }
    &:not(:placeholder-shown) + .control-label,
    .form-control:focus:not(:placeholder-shown) + .control-label {
        visibility: visible;
        z-index: 1;
        opacity: 1;
        transform: translateX(10px) translateY(-52px);
        transition: 0.2s ease-in-out transform;
        background-color:white;
    }
    width:100%;
`;
const Label = styled.label.attrs(props => ({
    className: "control-label"

}))`
    display: inline-block;
    opacity: 0;
    color:rgb(53,116,230);
    transition: 0.2s ease-in-out transform;
    font-size: 12px;
    width:auto;
    padding-left:5px;
    padding-right:5px;



`;


const ContentInput=({content, setContent,expand,setExpand})=>(
        <Field>
                            <TextArea id="inputContent" onChange={evt=>{
                              setContent(evt.target.value);
                            }} value={content} placeholder="Content Received from your mobile will be placed here."
                            onFocus={()=>setExpand('inputContent')}/>
                            <Label htmlFor="inputContent">Content</Label>
                            <Help expandId='inputContent' expand={expand} setExpand={setExpand}>
                            The encrypted content received from your mobile app will be displayed in this text box.
                            Since the key that has encrypted the content never leaves your mobile app and the encryption takes place inside your mobile app,
                            this application is not able to decrypt the content.
                            </Help>

        </Field>
    );


    const LabelInput=({label, setLabel,expand,setExpand})=>(
        <Field>
                            <Input id="inputLabel" onChange={evt=>{
                              setLabel(evt.target.value);
                            }} value={label} placeholder="Label for the content above."
                            onFocus={()=>setExpand('inputLabel')}/>
                            <Label htmlFor="inputLabel">Label</Label>
                            <Help expandId='inputLabel' expand={expand} setExpand={setExpand}>
                            The label you would to use to identify the encrypted content.
                            The label will be placed the underneath the QR Code you are going to generate in the next step.
                            </Help>

        </Field>
    );


    const Help=({children,expandId, expand,setExpand})=>{
        const isExpanded=expand===expandId;
        const toggle=()=>setExpand(isExpanded?'':expandId);
        return (
        <HelpContainer>
                <ExpandIcon expand={isExpanded} onClick={toggle}/>
                <HelpContent expand={isExpanded}>
                    {children}
                </HelpContent>
        </HelpContainer>
        );
    }

    const HelpContainer=styled.div`
 position:relative;

 top:-32px;
 display:flex;
 flex-direction:row;
 justify-content:flex-start;
 align-items:flex-start;
 flex-wrap:wrap;
`;
const HelpContent=styled.div`
font-family: Avenir;
    color: rgb(53,116,230);
    white-space: wrap;
    font-size: 12px;
    display:${props=>props.expand?'inline':'none'};
    @media only screen and (min-width:500px){
        font-size: 14px;
    }

`;


const ExpandIcon =styled.div`
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    border:1px solid red;
    background-color:white;
    cursor:pointer;


    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 100px;
    top:-5px;
    color:rgb(77,104,206);
    margin-right:5px;
    transform:${props=>props.expand?'rotate(90deg)':'rotate(0deg)'};
    &::after {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 6px;
        height: 6px;
        border-bottom: 2px solid;
        border-right: 2px solid;
        transform: rotate(-45deg);
        left: 5px;
        top: 6px;
    }

`;