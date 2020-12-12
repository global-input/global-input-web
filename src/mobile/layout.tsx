import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import closeIcon from './images/close.png';
import settingsIcon from './images/settings.png';
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
        border: 3px solid #f1f1f1;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: flex;
        -moz-box-shadow: 3px 3px 5px #535353;
    -webkit-box-shadow: 3px 3px 5px #535353;
    box-shadow: 3px 3px 5px #535353;
`;
const PopupContainer2=styled(PopupContainer)`
    width:90%;
    max-width:450px;
`;


export const TopBar = styled.div`
        display: flex;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        min-height:30px;

        border-bottom:1px solid rgb(230,230,230);

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
`;



export const TopItem = styled.div`
    margin:0;
    padding: 0;
`;









export const Title = styled.div`
        font-family: Avenir;
        color: #5291CD;
        font-weight: 100;
        white-space: nowrap;
        font-size: 14px;
        margin-left:20px;
`;
export const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    display:flex;
    min-width:50px;
    max-width:30px;
`;
export const BigButton = styled.button`
    text-decoration: none;
    border-radius: 8px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color:#EEEEEE;
    border-width:0;
    padding: 10px;
    max-width: 200px;
    font-size: 15px;
    display:flex;
`;





const useClickedOutside = (element, onClicked) => {
    useEffect(() => {
        const handleClick = (evt) => {
            if (element.current && (!element.current.contains(evt.target))) {
                onClicked();
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [onClicked, element]);
};


export const SettingsButton=styled.input.attrs({
    type:'image',
    name:'settings',
    alt:'Settings',
    src:settingsIcon
})`
margin-left:5px;
`;
export const CloseButton=styled.input.attrs({
    type:'image',
    name:'close',
    alt:'Close',
    src:closeIcon
})`
margin-right:5px;
`;




interface PopupWindowProps {
    onClose: () => void;
}
export const PopupWindow: React.FC<PopupWindowProps> = ({ children, onClose}) => {
    const popup = useRef(null);
    useClickedOutside(popup, onClose);
    return (
        <PopupGlass>
            <PopupContainer ref={popup}>
                {children}
            </PopupContainer>
        </PopupGlass>
    );
};

export const PopupWindow2: React.FC<PopupWindowProps> = ({ children, onClose}) => {
    const popup = useRef(null);
    useClickedOutside(popup, onClose);
    return (
        <PopupGlass>
            <PopupContainer2 ref={popup}>
                {children}
            </PopupContainer2>
        </PopupGlass>
    );
};

export const Form = styled.div`
    display:flex;
    flex-direction:column;
    width:95%;
    justify-content:flex-start;
    align-items:flex-start;
    padding:10px;
`;




const Field = styled.div`
    position: relative;
    margin: 20px auto;
    width:100%;



`;
const Input = styled.input`
    display: block;
    line-height: 2em;
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
        transform: translateY(-5px);
        transition: 0.2s ease-in-out transform;
    }
    width:100%;
`;
const Label = styled.label.attrs(props => ({
    className: "control-label"

}))`
    display: block;
    position: absolute;
    opacity: 0;
    bottom: 1.9rem;
    color: #5d5d5d;
    transition: 0.2s ease-in-out transform;
    font-size: 12px;
`;


export const Footer = styled.div`
        display: flex;
        margin:0;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
`;


interface InputFieldProps {
    id: string;
    onChange: (value: string) => void;
    label: string;

}
export const InputField = ({ id, onChange, label, value }) => {
    return (<Field>
        <Input id={id}
            onChange={evt => {
                onChange(evt.target.value)
            }}
            value={value}
            placeholder={label} />
        <Label htmlFor={id}>{label}</Label>
    </Field>
    );
}
