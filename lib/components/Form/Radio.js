import { themeGet } from 'styled-system';

import React from 'react';
import system from '@rebass/components';

const BaseRadio = system({ is: 'input', type: 'radio', blacklist: ['checkedColor', 'disabledTint'] }, props => ({
    position: 'absolute',
    opacity: 0,
    top: 0,
    left: 0,
    cursor: 'pointer',
    '&:hover:not(:disabled) ~ span': {
        borderColor: themeGet(`colors.${props.checkedColor}`, props.checkedColor)(props),
    },
    '&:checked': {
        '& + span': {
            backgroundColor: themeGet(`colors.${props.checkedColor}`, props.checkedColor)(props),
            borderColor: themeGet(`colors.${props.checkedColor}`, props.checkedColor)(props),
        },
        '&:disabled': {
            '~ span': {
                backgroundColor: themeGet(`colors.${props.disabledTint}`, props.disabledTint)(props),
                borderColor: themeGet(`colors.${props.disabledTint}`, props.disabledTint)(props),
            },
        },
    },
    'input:checked ~ span:after': {
        display: 'block',
    },
}));

/* 
    Important: this element needs to remain a span 
    because currently the css selectors in BaseRadio are 
    selecting the span element. Not great, should fix.
*/
const Checkmark = system({ is: 'span' }, 'size', 'borders', 'borderColor', 'borderRadius', 'space', 'color', () => ({
    position: 'absolute',
    top: 0,
    left: 0,
    boxShadow: '0 0 0 3px white inset',
    boxSizing: 'border-box',
    lineHeight: 0,
    borderRadius: '50%',

    '& path': {
        fill: 'currentColor',
    },
}));

const Label = system(
    {
        is: 'label',
        fontFamily: 'default',
    },
    'space',
    'fontFamily',
    () => ({
        position: 'relative',
    })
);

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
    fontFamily,
    labelIndent,
}) {
    return (
        <Label pl={labelIndent} fontFamily={fontFamily} htmlFor={htmlFor} color={disabled && disabledTint}>
            <BaseRadio
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                checkedColor={radioHoverColor}
                disabledTint={disabledTint}
                value={value}
            />
            <Checkmark size={radioSize} borderColor={radioBorderColor} border={radioBorderWidth} />
            {label}
        </Label>
    );
}

Radio.defaultProps = {
    labelIndent: 28,
    radioSize: 20,
    radioBorderColor: 'lightGrey',
    radioBorderWidth: 3,
    radioHoverColor: 'primary',
    disabledTint: 'lightGrey',
};

export default Radio;
