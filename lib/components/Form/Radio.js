import { borderColor, borderWidth, size, space, themeGet } from 'styled-system';

import Box from '../Box';
import React from 'react';
import styled from 'styled-components';

const BaseRadio = styled.input`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    cursor: pointer;

    &:hover:not(:disabled) ~ span {
        border-color: ${({ checkedColor }) => themeGet(`colors.${checkedColor}`, checkedColor)};
    }

    &:checked {
        ~ span {
            background-color: ${({ checkedColor }) => themeGet(`colors.${checkedColor}`, checkedColor)};
            border-color: ${({ checkedColor }) => themeGet(`colors.${checkedColor}`, checkedColor)};
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
    ${borderWidth};
    ${borderColor};
    top: 0;
    left: 0;
    border-radius: 50%;
    border-style: solid;
    box-shadow: 0 0 0 3px white inset;
    box-sizing: border-box;
`;

const Label = styled(Box)`
    position: relative;
    ${space};
`;

Label.defaultProps = {
    as: 'label',
    pl: 28,
};

function Radio({
    htmlFor,
    label,
    checked,
    disabled,
    onChange,
    radioSize,
    radioBorderColor,
    radioBorderWidth,
    radioHoverColor,
    disabledTint,
    value,
}) {
    return (
        <Label htmlFor={htmlFor} color={disabled && disabledTint}>
            <BaseRadio
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                checkedColor={radioHoverColor}
                disabledTint={disabledTint}
                value={value}
            />
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
