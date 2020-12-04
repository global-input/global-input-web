import React from 'react';
import styled from 'styled-components';
import appIcon from './app-icon.png';

const Button = styled.button`
    text-decoration: none;
    font-size: 11px;
    border-radius: 4px;
    color: #4281BD;
    background-color: white;
    white-space: nowrap;
    padding: 5px;
    min-width: 20px;
    margin-left: 20px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: ${props => props.show ? 'flex' : 'none'};
`;

const Image = styled.img`
margin - right: 5px;
`;

export const ConnectButton = ({ onClick, label = "Connect", show = true }) => (
    <Button onClick={onClick} show={show}>
        <Image src={appIcon} alt="global input app icon" />
        {label}
    </Button>
);
