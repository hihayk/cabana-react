import { borderColor, borderWidth, size, space, style, themeGet } from 'styled-system';

import Box from '../Box';
import React from 'react';
import styled from 'styled-components';

const BaseCheckbox = styled.input`
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
BaseCheckbox.defaultProps = {
    type: 'checkbox',
};

const svgFillColor = style({
    prop: 'color',
    cssProperty: 'fill',
    key: 'colors',
});

/* 
    Important: this element needs to remain a span 
    because currently the css selectors in BaseCheckbox are 
    selecting the span element. Not great, should fix.
*/
const Checkmark = styled.span`
    ${size};
    ${borderColor};
    ${borderWidth};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20%;
    border-style: solid;
    box-shadow: 0 0 0 3px white inset;
    box-sizing: border-box;
    line-height: 0;

    path {
        ${svgFillColor};
    }
`;

const Label = styled(Box)`
    position: relative;
    ${space};
`;

Label.defaultProps = {
    as: 'label',
    pl: 28,
};

function Checkbox({
    htmlFor,
    label,
    checked,
    disabled,
    onChange,
    checkboxSize,
    checkboxBorderColor,
    checkboxBorderWidth,
    checkedColor,
    disabledTint,
    value,
}) {
    return (
        <Label htmlFor={htmlFor} color={disabled && disabledTint}>
            <BaseCheckbox
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                checkedColor={checkedColor}
                disabledTint={disabledTint}
                value={value}
            />
            <Checkmark
                color={checkedColor}
                size={checkboxSize}
                borderColor={checkboxBorderColor}
                borderWidth={checkboxBorderWidth}
            >
                {checked && (
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" fill="none" fillRule="evenodd">
                            <g id="Group" transform="translate(-3 -4)">
                                <path
                                    d="M12.3091446,4.31824406 L7.40914454,10.0364259 L4.45459906,7.81824406 C4.05293726,7.51699771 3.48311725,7.59840044 3.1818718,8.00006226 C2.88062543,8.40172408 2.96202816,8.97154408 3.36368998,9.27278953 L7.68187183,12.5091532 L13.6909628,5.50006226 C14.0173128,5.11848406 13.972541,4.5445986 13.5909628,4.21824406 C13.2093846,3.89189406 12.6354992,3.93666587 12.3091446,4.31824406 Z"
                                    id="check"
                                    fill="#000"
                                />
                            </g>
                        </g>
                    </svg>
                )}
            </Checkmark>
            {label}
        </Label>
    );
}

Checkbox.defaultProps = {
    checkboxSize: 20,
    checkboxBorderColor: 'lightGrey',
    checkboxBorderWidth: 2,
    checkedColor: 'primary',
    disabledTint: 'lightGrey',
};

export default Checkbox;
