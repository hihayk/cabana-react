import React from 'react';
import system from '@rebass/components';

const styledSystemFunctions = [
    'alignContent',
    'alignItems',
    'alignSelf',
    'borderColor',
    'borderRadius',
    'borders',
    'bottom',
    'boxShadow',
    'color',
    'display',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexWrap',
    'fontSize',
    'fontWeight',
    'height',
    'justifyContent',
    'justifySelf',
    'left',
    'letterSpacing',
    'lineHeight',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'order',
    'position',
    'right',
    'space',
    'textAlign',
    'top',
    'width',
    'zIndex',
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
