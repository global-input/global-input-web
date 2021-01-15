import React  from 'react';
import type {ChangeEvent} from 'react';
import styled from 'styled-components';

const Input=styled.input.attrs({
    type:'checkbox'
})`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;
const Label=styled.label`
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`;

const Span=styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 38px;
  width:38px;
  background-color: #eee;


${Label}:hover ${Input} ~ & {
    background-color: #ccc;
}
${Label} ${Input}:checked ~ & {
    background-color: #2196F3;
 }

&: after{
    content: "";
    position: absolute;
    display: none;
}
${Input}:checked ~ &:after {
    display: block;
}
&:after {
    left: 12px;
    top: 0px;
    width: 15px;
    height: 30px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

`;

interface CheckBoxProps{
    label:string;
    checked:boolean;
    onChange:(evt:ChangeEvent<HTMLInputElement>)=>void;
}
export const CheckBox:React.FC<CheckBoxProps>=({label='',checked,onChange})=>(
 <Label>
     {label}
     <Input checked={checked} onChange={onChange}/>
     <Span/>
 </Label>
);