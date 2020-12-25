import React from 'react';
import styled from 'styled-components';

export const Form = styled.div`
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


export const Field = styled.div`
    position: relative;
    width:100%;
    padding-top:15px;


`;
export const TextArea = styled.textarea`
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

export const Input = styled.input`
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
export const Label = styled.label.attrs(props => ({
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
export const Help=({children,expandId, expand,setExpand})=>{
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
};
const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;

    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    display:flex;
    min-width:50px;

    max-width: 200px;
    margin-left:5px;
    margin-right:5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;

    &: hover{
        transform: translateY(-3px);
        box-shadow: 0 0 50px #ffff;
    }

`;

const BigButton = styled(Button)`
    border-width:0;
    font-size: 15px;
`;
export const DarkButton = styled(BigButton)`
        background-color:rgb(208, 226, 247);
`;


export const Footer = styled.div`
        display: flex;
        margin:0;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding-bottom:50px;

`;