import React from 'react';
import system from '@rebass/components';

const styledSystemFunctions = [
    'borderRadius',
    'space',
    'width',
    'color',
    'fontSize',
    'borders',
    'borderColor',
    'display',
    'maxWidth',
    'minWidth',
    'height',
    'maxHeight',
    'minHeight',
    'alignItems',
    'alignContent',
    'justifyContent',
    'flexWrap',
    'flexDirection',
    'flex',
    'flexBasis',
    'justifySelf',
    'alignSelf',
    'order',
    'position',
    'zIndex',
    'top',
    'right',
    'bottom',
    'left',
    'lineHeight',
    'fontWeight',
    'letterSpacing',
    'boxShadow',
    'textAlign',
];
const BaseButton = system(
    {
        is: 'button',
        boxShadow: 20,
        fontWeight: 'bold',
        borderRadius: 'small',
        border: '1px solid',
        borderColor: 'transparent',
    },
    ...styledSystemFunctions,
    props => ({
        '&[href]': {
            textDecoration: props.textDecoration || 'none',
        },
        '&:hover': {
            opacity: 0.9,
        },
        // '&:focus': {
        //     outline: `2px solid ${themeGet(`colors.${props.bg}`)(props)}`,
        //     outlineOffset: '1px',
        // },
    })
);

BaseButton.displayName = 'BaseButton';

const Button = props => <BaseButton fontSize="small" px={3} py={1} {...props} />;
const ButtonSmall = props => <BaseButton fontSize="caption" lineHeight="body" px={2} py={1} {...props} />;
const ButtonLarge = props => <BaseButton fontSize="h5" lineHeight="31px" px={4} py={1} {...props} />;

ButtonSmall.defaultProps = {
    letterSpacing: 'tiny',
};

export { ButtonSmall, Button, ButtonLarge };
