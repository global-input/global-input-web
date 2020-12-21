import React, {useState} from 'react';
import styled from 'styled-components';



const ExpandIcon =styled.div`
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 100px;
    top:7px;
    color:rgb(77,104,206);
    transform:${props => props.expand ? 'rotate(90deg)' : 'rotate(0deg)' };
    margin-right:5px;
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


const HelpContainer=styled.div`
 position:relative;
 top:-20px;
 display:flex;
 flex-direction:column;
 justify-content:flex-start;
 align-items:flex-start;
`;

const HelpTitle=styled.div`
    font-family: Avenir;
    color: rgb(53,116,230);
    white-space: wrap;
    font-size: 10px;
    cursor:pointer;



`;

const HelpContent=styled.div`
font-family: Avenir;
    color: rgb(53,116,230);
    white-space: wrap;
    font-size: 10px;
    display:${props=>props.expand?'block':'none'};

`;

export const WebSocketServer=styled.a.attrs({
    target:'_blank',
    rel: 'noopener noreferrer',
    href:'https://github.com/global-input/global-input-node',

})`
color: rgb(53,116,230);
text-decoration:none;
margin-left:5px;
`;





export const ProxyURLHelp=({expand,setExpand})=>{

    return (
        <HelpContainer>
                <HelpTitle onClick={
                    ()=>setExpand(expand==='url'?'':'url')
                }><ExpandIcon expand={expand==='url'}/>Proxy URL</HelpTitle>
                <HelpContent expand={expand==='url'}>
                                Proxy URL identifies the <WebSocketServer>WebSocket server</WebSocketServer> responsible for proxying messages between your mobile app and this application.
            You can install and use your own <WebSocketServer>WebSocket servers</WebSocketServer> that can run in insecure environments thanks to the end-to-end encryption that secures messages between the mobile app and the application.
                                </HelpContent>

                        </HelpContainer>

)
};

export const APIKeyHelp=({expand,setExpand})=>(
    <HelpContainer>
            <HelpTitle>API Key</HelpTitle>
            <HelpContent>
    API Key is used by <WebSocketServer>WebSocket servers</WebSocketServer> to identify the client application that is making the connection.
Since the WebSocket servers do not hold any sensitive information, there is no security implications in regards to API Key except for protecting
the connection resources allocated for the client applications.
                            </HelpContent>
                    </HelpContainer>
);

export const SecurityGroupKeyHelp=({expand,setExpand})=>(
<HelpContainer>
            <HelpTitle>Security Group Key</HelpTitle>
            <HelpContent>
            Security Group Key is used by the device application to verify the incoming mobile app connection (via a WebSocket server)
            in the same way that API Key is used by a server application to identify a client application.
            If you change this value, you need to pair your mobile app to this application.
                            </HelpContent>


                    </HelpContainer>


);



export const CodeKeyHelp=({expand,setExpand})=>(
<HelpContainer>
            <HelpTitle>Code Key</HelpTitle>
            <HelpContent>
            Code Key is used by the device application to encrypt the content of the QR Code for mobile apps to connect to this applications.
            Obviously, if you change this value, you need to pair your mobile app so it can decrypt the content of the QR code it has scanned.
                            </HelpContent>


                    </HelpContainer>


);
