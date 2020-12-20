import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';


const PopupGlass = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height:100vh;
        margin: 0;
        padding: 0;
        position: fixed;
        top:0;
        left:0;
        z-index:10;
`;

const PopupContainer = styled.div`
        flex-direction: column;
        justify-content: flex-center;
        align-items: flex-start;
        background-color: white;
        margin: 0;
        padding:0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: flex;
        -moz-box-shadow: 3px 3px 5px #535353;
    -webkit-box-shadow: 3px 3px 5px #535353;
    box-shadow: 3px 3px 5px #535353;
`;

export const TopBar = styled.div`
        display: flex;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        flex-direction: row;
        align-items:flex-start;
        justify-content: space-between;
        width: 100%;
        align-items: flex-end;
        min-height:70px;
        background-color:rgb(220,220,220);
`;
export const PopupContent = styled.div`
        flex-direction: column;
        justify-content: flex-center;
        align-items: center;
        margin: 0;
        padding:0;
        display: flex;
        width:100%;
        margin-top:10px;
        overflow:scroll;
`;

export const disableBodyScroll=()=>{
    document.body.style.overflow = 'hidden'
}
export const enableBodyScroll=()=>{
    document.body.style.overflow = 'unset'
}



const useClickedOutside = (element, onClicked) => {
    useEffect(() => {
        const handleClick = (evt) => {
            if (element.current && (!element.current.contains(evt.target))) {
                console.log("-----outclicked");
                onClicked();
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [onClicked, element]);
};



export const PopupWindow= ({ children}) => {
    const popup = useRef(null);
    //useClickedOutside(popup, onClose);
    return (
        <PopupGlass>
            <PopupContainer ref={popup}>
                {children}
            </PopupContainer>
        </PopupGlass>
    );
};
