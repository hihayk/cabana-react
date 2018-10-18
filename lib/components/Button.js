import React, { Fragment } from 'react';
import system from '@rebass/components';
import Icon from './Icon';
import { themeGet } from 'styled-system';

const BaseButton = system(
    {
        is: 'button',
        boxShadow: 20,
        fontWeight: 'bold',
        borderRadius: 'small',
        blacklist: ['iconLeft', 'iconRight'],
    },
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

const ButtonContent = props => (
    <Fragment>
        {props.iconLeft && <Icon mr={1} fontSize={props.fontSize} stroke={props.color} />}
        {props.children}
        {props.iconRight && <Icon ml={1} fontSize={props.fontSize} stroke={props.color} />}
    </Fragment>
);

const Button = props => (
    <BaseButton py={1} px={3} fontSize="body" {...props}>
        <ButtonContent fontSize="body" {...props} />
    </BaseButton>
);
const ButtonSmall = props => (
    <BaseButton py={1} px={2} fontSize="caption" letterSpacing="tiny" lineHeight="body" {...props}>
        <ButtonContent fontSize="caption" {...props} />
    </BaseButton>
);
const ButtonLarge = props => (
    <BaseButton py={1} px={4} fontSize="h5" letterSpacing="tiny" lineHeight="31px" {...props}>
        <ButtonContent fontSize="h5" {...props} />
    </BaseButton>
);

export { ButtonSmall, Button, ButtonLarge };
