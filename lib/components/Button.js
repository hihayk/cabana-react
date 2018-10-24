import React from 'react';
import system from '@rebass/components';
import { themeGet } from 'styled-system';

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
];
const BaseButton = system(
    {
        is: 'button',
        boxShadow: 20,
        fontWeight: 'bold',
        borderRadius: 'small',
    },
    ...styledSystemFunctions,
    props => ({
        border: '1px solid',
        '&:hover': {
            opacity: 0.9,
        },
        '&:focus': {
            outline: `2px solid ${themeGet(`colors.${props.bg}`)(props)}`,
            outlineOffset: '1px',
        },
    })
);

BaseButton.displayName = 'BaseButton';

const Button = props => <BaseButton py={1} px={3} fontSize="small" {...props} />;
const ButtonSmall = props => <BaseButton py={1} px={2} fontSize="caption" lineHeight="body" {...props} />;
const ButtonLarge = props => <BaseButton py={1} px={4} fontSize="h5" lineHeight="31px" {...props} />;

ButtonSmall.defaultProps = {
    letterSpacing: 'tiny',
};

export { ButtonSmall, Button, ButtonLarge };
