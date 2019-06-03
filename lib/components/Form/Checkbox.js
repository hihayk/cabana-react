import { themeGet } from '@styled-system/theme-get';

import React from 'react';
import system from '@rebass/components';

const BaseCheckbox = system({ is: 'input', type: 'checkbox', blacklist: ['checkedColor', 'disabledTint'] }, props => ({
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
    because currently the css selectors in BaseCheckbox are 
    selecting the span element. Not great, should fix.
*/
const Checkmark = system({ is: 'span' }, 'size', 'borders', 'borderColor', 'borderRadius', 'space', 'color', () => ({
    position: 'absolute',
    // top: 0,
    left: 0,
    boxShadow: '0 0 0 3px white inset',
    boxSizing: 'border-box',
    lineHeight: 0,

    '& path': {
        fill: 'currentColor',
    },
}));

const Label = system(
    {
        is: 'label',
        fontFamily: 'default',
        pl: 28,
        position: 'relative',
    },
    'position',
    'color',
    'space',
    'fontFamily'
);
function Checkbox(props) {
    const {
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
        borderRadius,
        px,
        py,
        p,
        pl,
        pr,
        pt,
        pb,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
    } = props;

    const labelProps = {
        p,
        m,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
    };
    return (
        <Label color={disabled && disabledTint} {...labelProps}>
            <BaseCheckbox
                checked={checked}
                checkedColor={checkedColor}
                disabled={disabled}
                disabledTint={disabledTint}
                onChange={onChange}
                value={value}
            />
            <Checkmark
                border={checkboxBorderWidth}
                borderColor={checkboxBorderColor}
                borderRadius={borderRadius}
                color={checkedColor}
                size={checkboxSize}
            >
                {checked && (
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd" id="Page-1">
                            <g id="Group" transform="translate(-2 -2)">
                                <path
                                    d="M12.3091446,4.31824406 L7.40914454,10.0364259 L4.45459906,7.81824406 C4.05293726,7.51699771 3.48311725,7.59840044 3.1818718,8.00006226 C2.88062543,8.40172408 2.96202816,8.97154408 3.36368998,9.27278953 L7.68187183,12.5091532 L13.6909628,5.50006226 C14.0173128,5.11848406 13.972541,4.5445986 13.5909628,4.21824406 C13.2093846,3.89189406 12.6354992,3.93666587 12.3091446,4.31824406 Z"
                                    fill="#000"
                                    id="check"
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
    checkboxBorderWidth: 3,
    borderRadius: '20%',
    checkedColor: 'primary',
    disabledTint: 'lightGrey',
};

export default Checkbox;
