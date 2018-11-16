import Box from './Box';
import { IconCabanaClose } from 'cabanaico';
import React from 'react';
import system from '@rebass/components';

/*
    todo: PR regarding blacklists - you cannot extend a blacklist?
*/
const NotificationContainer = system(
    {
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'none',
        blacklist: ['dismissable', 'icon', 'content'],
    },
    'color',
    'display',
    'space',
    // flexbox
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
    'borderRadius',
    'boxShadow',
    'fontSize'
);

const NotificationContent = system(
    {
        extend: Box,
        fontFamily: 'default',
    },
    'fontFamily',
    () => ({
        flexGrow: 1,
    })
);

const CloseIcon = system(
    {
        is: 'button',
        fontSize: 'inherit',
    },
    'alignSelf',
    () => ({
        background: 'transparent',
        border: 'none',
        color: 'inherit',
        fontSize: 'inherit',
        '&:hover': {
            background: 'rgba(255,255,255, 0.2)',
            cursor: 'pointer',
        },
    })
);

NotificationBar.defaultProps = {
    content: 'Foo',
    bg: 'primary',
    color: 'white',
    dismissable: true,
    icon: true,
    borderRadius: 'small',
    p: 1,
    fontSize: 'body',
    boxShadow: 'none',
    content: '',
};

export default function NotificationBar(props) {
    const { fontSize, icon, dismissable, content } = props;
    return (
        <NotificationContainer {...props}>
            {icon && <IconCabanaClose fontSize={fontSize} mr={1} />}
            <NotificationContent>{content}</NotificationContent>
            {dismissable && (
                <CloseIcon alignSelf="flex-start">
                    <IconCabanaClose />
                </CloseIcon>
            )}
        </NotificationContainer>
    );
}
