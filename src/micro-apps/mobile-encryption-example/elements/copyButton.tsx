import React, {useState, useRef,useEffect} from 'react';
import styled from 'styled-components';



const CopyContainer=styled.div`
    display:inline-flex;
    flex-direction:row;
    position:relative;
    align-self:flex-end;
    align-items:center;
    position:relative;
    top:-32px;
`;
const CopyContent=styled.div`
    font-family: Avenir;
    color: rgb(53,116,230);
    white-space: wrap;
    font-size: 12px;
    padding-right:10px;
    display:${props=>props.show?'inline':'none'};
`;

const Button = styled.button`
    text-decoration: none;
    font-size: 10px;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    &: hover{
        transform: translateY(-3px);
        box-shadow: 0 0 50px #ffff;
    }
    display:${props=>props.show?'flex':'none'};

`;


export const CopyToClipboardButton=({children,value})=>{
    const [copying,setCopying]=useState(false);
    const timerHandler = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => {
        return () => {
            if (timerHandler.current) {
                clearTimeout(timerHandler.current);
                timerHandler.current = null;
            }
        }
    }, []);

  const onCopy=()=>{
      setCopying(true);
       navigator.clipboard.writeText(value);
      timerHandler.current && clearTimeout(timerHandler.current);
      timerHandler.current = setTimeout(() => {
      timerHandler.current=null;
      setCopying(false);
    }, 2000);
  }
    return (
    <CopyContainer>
            <CopyContent show={copying}>
                copied into your clipboard
            </CopyContent>
            <Button onClick={onCopy} show={(!copying) && navigator.clipboard && value}>Copy</Button>

    </CopyContainer>
    );
};
