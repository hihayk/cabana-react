import { borderColor, borderWidth, size, space, themeGet } from 'styled-system';

import React from 'react';
import styled from 'styled-components';

const BaseRadio = styled.input`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    cursor: pointer;

    &:hover ~ span {
        border-color: ${({ hoverColor }) => themeGet(`colors.${hoverColor}`, hoverColor)};
    }
    &:checked {
        ~ span {
            background-color: ${({ hoverColor }) => themeGet(`colors.${hoverColor}`, hoverColor)};
            border-color: ${({ hoverColor }) => themeGet(`colors.${hoverColor}`, hoverColor)};
        }
        &:disabled {
            ~ span {
                background-color: ${({ disabledTint }) => themeGet(`colors.${disabledTint}`, disabledTint)};
                border-color: ${({ disabledTint }) => themeGet(`colors.${disabledTint}`, disabledTint)};
            }
        }
    }
    input:checked ~ span:after {
        display: block;
    }
`;
BaseRadio.defaultProps = {
    type: 'radio',
};

/* 
    Important: this element needs to remain a span 
    because currently the css selectors in BaseRadio are 
    selecting the span element. Not great, should fix.
*/
const Checkmark = styled.span`
    ${size};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border-style: solid;
    ${borderWidth};
    ${borderColor};
    box-shadow: 0 0 0 3px white inset;
    box-sizing: border-box;
`;

const Label = styled.label`
    position: relative;
    ${space};
`;

Label.defaultProps = {
    pl: 28,
};

function Radio({
    htmlFor,
    label,
    checked,
    disabled,
    radioSize,
    radioBorderColor,
    radioBorderWidth,
    radioHoverColor,
    disabledTint,
}) {
    return (
        <Label htmlFor={htmlFor}>
            <BaseRadio checked={checked} disabled={disabled} hoverColor={radioHoverColor} disabledTint={disabledTint} />
            <Checkmark size={radioSize} borderColor={radioBorderColor} borderWidth={radioBorderWidth} />
            {label}
        </Label>
    );
}

Radio.defaultProps = {
    radioSize: 20,
    radioBorderColor: 'lightGrey',
    radioBorderWidth: 2,
    radioHoverColor: 'primary',
    disabledTint: 'lightGrey',
};

export default Radio;
