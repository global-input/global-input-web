import React from 'react';
import styled from 'styled-components';

interface ExpandProp{
    expand?:boolean;
    position?:number;
}
const ExpandIcon =styled.div<ExpandProp>`
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
    position:relative;
    top:-18px;

`;

const HelpContainer1=styled.div`
 display:flex;
 flex-direction:column;
 justify-content:flex-start;
 align-items:flex-start;
`;
const HelpContainer2=styled(HelpContainer1)`
    position:relative;
    top:-25px;
    padding-right:100px;
`;
const HelpContainer3=styled(HelpContainer1)`
    position:relative;
    top:-12px;
`;
const HelpContainer:React.FC<ExpandProp>=({position=1,children})=>{
    if(position===2){
        return (<HelpContainer2>{children}</HelpContainer2>)
    }
    else if(position===3){
        return (<HelpContainer3>{children}</HelpContainer3>)
    }
    else{
        return (<HelpContainer1>{children}</HelpContainer1>)
    }
}

const HelpContent=styled.div<ExpandProp>`
font-family: Avenir;
    color: rgb(53,116,230);
    white-space: wrap;
    font-size: 12px;
    display:${props=>props.expand?'inline':'none'};
    @media only screen and (min-width:500px){
        font-size: 14px;
    }
    position:relative;
    top:-35px;
    left:30px;



`;

interface Prop{
    expandId:string;
    expand:string;
    setExpand:(expand:string)=>void;
    position?:number;
}
export const Help:React.FC<Prop>=({children,expandId, expand,setExpand, position=1})=>{
    const isExpanded=expand===expandId;
    const toggle=()=>setExpand(isExpanded?'':expandId);
    return (
    <HelpContainer position={position}>
            <ExpandIcon expand={isExpanded} onClick={toggle}/>
            <HelpContent expand={isExpanded}>
                {children}
            </HelpContent>
    </HelpContainer>
    );
};
