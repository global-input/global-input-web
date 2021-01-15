import React from 'react';
import styled from 'styled-components';
import {WhenConnected} from '../mobile';
import type {MobileData} from '../mobile';

export const AppTitle=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    color: #445566;
    font-family: Georgia, Times, Serif;


    @media screen and (min-height:150px){
        font-size:26px;
    }

    @media screen and (min-height:400px){
        font-size:32px;
        margin-bottom:10px;
    }
    @media print{
        display:none;
    }
},`;

export const SourceLinkElement=styled.a`
    color: #153E85;
    font-weight: 100;
    font-family: Georgia, Times, Serif;
    font-size: 8px;
    float:right;

    @media screen and (min-height:150px){
        font-size:12px;
    }
    @media screen and (min-height:400px){
        font-size:16px;
    }
   @media print{
       display:none;
   }
    `;

export const AppContainerElement =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    min-height:100vh;
    width:100%;
    backgroundColor: rgb(219,240,240);
`;

export const AppBody=styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
    flex:1;
`;
export const AppContent=styled.div`
    width:95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10px;
    flex:1;
`;


export const AppTitleSection=styled.div`
   display:block;
   padding-top:0;
   @media screen and (min-height:340px){
    padding-top:10px;
   }
   @media screen and (min-height:500px){
    padding-top:40px;
   }
`;


export const Title=styled.div`
    font-size: 12px;
    color: #445566;
    align-self:flex-start;
    font-family: Georgia, Times, Serif;
    @media screen and (min-height:150px){
        font-size:16px;
    }
    @media screen and (min-height:400px){
        font-size:20px;
        margin-bottom:10px;
    }
    @media print{
        display:none;
    }
`;

export const FormTitle=styled.div`
    font-size: 10px;
    color: #445566;
    align-self:flex-start;
    font-family: Georgia, Times, Serif;
    @media screen and (min-height:150px){
        font-size:12px;
    }
    @media screen and (min-height:400px){
        font-size:16px;
        margin-bottom:10px;
    }
    @media print{
        display:none;
    }
`;




export const MoreInfo = styled.div`
    font-size: 16px;
    align-self:flex-start;
    @media screen and (min-height:310px){
         margin-bottom:10px;

    }
    @media print {
        display:none;
    }
`;
interface InstructionProps{
    center?:boolean;
}
export const Instruction=styled.div<InstructionProps>`
    font-size: 10px;
    align-self:${props=>props.center?'center':'flex-start'};
    @media screen and (min-height:250px){
        font-size: 16px;
    }
    @media screen and (min-height:380px){
        font-size: 16px;
        margin-bottom:10px;
    }

`;



interface ConnectedInstructionProps{
    mobile:MobileData;
    center?:boolean;
}


export const ConnectedInstruction:React.FC<ConnectedInstructionProps>=({children, mobile, center=false})=>(

<WhenConnected mobile={mobile}>
                <Instruction center={center}>
                    {children}
                </Instruction>
            </WhenConnected>

);


export const Error = styled.div`
        color: red;
        font-size: 11;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        max-width:  350px;
        max-height: 100px;
        overflow: scroll;
`;

export const ConnectContainer=styled.div`
    display:flex;
    flex-direction:column;

    min-width:50px;

    padding-bottom:30px;
`;