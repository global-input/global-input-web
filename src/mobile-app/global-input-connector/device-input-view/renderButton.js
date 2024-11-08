import React from 'react';
import styled from 'styled-components';
import images from "../../../configs/images";
import {formDataUtil} from '../../../appdata';
import IconButton from '../../components/buttons/IconButton';
import { styles, stylesData } from "../styles";

// Utility functions
const getContentAndStyle = (content, name) =>
    formDataUtil.getContentAndStyle({ content, name, styles, data: stylesData });

const getStyleFromItem = (item, name) =>
    formDataUtil.getStyleFromItem({ item, name, styles, data: stylesData });

const createButtonProperties = (dataitem) => {
    const buttonProps = {
        label: dataitem.label,
        value: dataitem.value,
        iconText: dataitem.iconText,
    };

    if (dataitem.icon) {
        if (typeof dataitem.icon === 'object') {
            if (dataitem.icon.iconText) {
                buttonProps.iconText = dataitem.icon.iconText;
            }
            if (dataitem.icon.name) {
                buttonProps.iconImage = images.findImageIcon(dataitem.icon.name);
            }
        } else {
            buttonProps.iconImage = images.findImageIcon(dataitem.icon);
        }
    }

    if (!dataitem.options) {
        return buttonProps;
    }

    for (let option of dataitem.options) {
        if (option.value === dataitem.value) {
            return createButtonProperties(option);
        }
    }

    return buttonProps;
};

// Component for rendering button label
const renderButtonLabel = (label) => {
    if (label) {
        const buttonLabel = getContentAndStyle(label, 'buttonText');
        return <ButtonText style={buttonLabel.style}>{buttonLabel.content}</ButtonText>;
    }
    return null;
};

const RenderButton = ({ dataitem, onFieldChanged }) => {
    const buttonProps = createButtonProperties(dataitem);

    if (buttonProps.iconImage) {
        return (
            <IconContainer style={getStyleFromItem(buttonProps.container, 'iconContainer')}>
                <IconButton
                    image={buttonProps.iconImage}
                    label={buttonProps.label}
                    onClick={() => onFieldChanged(buttonProps.value)}
                />
            </IconContainer>
        );
    } else if (buttonProps.iconText) {
        const iconText = getContentAndStyle(buttonProps.iconText, 'buttonText');
        return (
            <StyledButton onClick={() => onFieldChanged(buttonProps.value)}>
                <ButtonContainer style={getStyleFromItem(dataitem.container, 'buttonContainer')}>
                    <Button style={getStyleFromItem(dataitem, 'button')}>
                        <ButtonText style={iconText.style}>{iconText.content}</ButtonText>
                    </Button>
                    {renderButtonLabel(buttonProps.label)}
                </ButtonContainer>
            </StyledButton>
        );
    } else {
        const buttonLabel = getContentAndStyle(buttonProps.label, 'buttonText');
        return (
            <StyledButton onClick={() => onFieldChanged(buttonProps.value)}>
                <ButtonContainer style={getStyleFromItem(dataitem.container, 'buttonContainer')}>
                    <Button style={getStyleFromItem(dataitem, 'button')}>
                        <ButtonText style={buttonLabel.style}>{buttonLabel.content}</ButtonText>
                    </Button>
                </ButtonContainer>
            </StyledButton>
        );
    }
};

export default RenderButton;

// Styled components
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 5px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
`;

const ButtonText = styled.span`
  font-size: 16px;
  color: #333;
`;