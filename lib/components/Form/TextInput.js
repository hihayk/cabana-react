import { themeGet } from 'styled-system';

import { TextPrimitive } from '../Text';
import system from '@rebass/components';
const BaseInput = system(
    {
        is: 'input',
        blacklist: [
            'placeholderColor',
            'borderColorHover',
            'placeholderHoverColor',
            'borderColorActive',
            'disabledBgColor',
            'disabledBorderColor',
        ],
    },
    'color',
    'borders',
    'borderColor',
    'borderRadius',
    'space',
    'fontSize',
    'lineHeight',
    'width',
    props => ({
        '&:focus': {
            borderColor: themeGet(`colors.inputFocus`, '#4688F1')(props),
            boxShadow: `0 0 0 1px ${themeGet(`colors.inputFocus`, '#4688F1')(props)}`,
            outline: 'none',
        },

        '&::placeholder': {
            color: themeGet(`colors.${props.placeholderColor}`, props.placeholderColor)(props),
            opacity: 1,
        },

        '&:hover:not(:disabled)': {
            borderColor: themeGet(`colors.${props.borderColorHover}`, props.borderColorHover)(props),
            '&::placeholder': {
                color: themeGet(`colors.${props.placeholderHoverColor}`, props.placeholderHoverColor)(props),
                opacity: 1,
            },
        },

        '&:active:not(:disabled)': {
            borderColor: themeGet(`colors.${props.borderColorActive}`, props.borderColorActive)(props),
            '&::placeholder': {
                color: themeGet(`colors.${props.placeholderHoverColor}`, props.placeholderHoverColor)(props),
            },
        },

        '&:disabled': {
            '&, &:hover': {
                backgroundColor: themeGet(`colors.${props.disabledBgColor}`, props.disabledBgColor)(props),
                borderColor: themeGet(`colors.${props.disabledBorderColor}`, props.disabledBorderColor)(props),
                color: themeGet(`colors.${props.disabledBorderColor}`, props.disabledBorderColor)(props),
            },
        },
    })
);

const TextInput = system({
    extend: BaseInput,
    type: 'text',
    color: 'black',
    bg: 'white',
    placeholder: 'Placeholder',
    borderRadius: 'small',
    p: 1,
    fontSize: 'body',
    lineHeight: 'body',
    border: '1px solid',
    borderColor: 'lightGrey',
    borderColorHover: 'grey',
    borderColorActive: 'primary',
    placeholderColor: 'lightGrey',
    placeholderHoverColor: 'grey',
    disabledBgColor: 'inputDisabledBg',
    disabledBorderColor: 'lightGrey',
});

const FormLabel = system({
    extend: TextPrimitive,
    is: 'label',
    color: 'grey',
    fontSize: 'small',
});

const ValidationLabel = system({
    extend: TextPrimitive,
    is: 'div',
    color: 'error',
    fontSize: 'small',
});

export { FormLabel, TextInput, ValidationLabel };
