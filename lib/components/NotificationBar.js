import Box from './Box';
// import { IconCabanaClose } from 'cabanaico';
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
    'alignContent',
    'alignItems',
    'alignSelf',
    'borderRadius',
    'boxShadow',
    'color',
    'display',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexWrap',
    'fontSize',
    'justifyContent',
    'justifySelf',
    'order',
    'space'
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
    bg: 'primary',
    borderRadius: 'small',
    boxShadow: 'none',
    color: 'white',
    content: '',
    dismissable: true,
    fontSize: 'body',
    icon: true,
    p: 1,
};

export default function NotificationBar(props) {
    const { dismissable, content } = props;
    return (
        <NotificationContainer {...props}>
            {/* {icon && <IconCabanaClose fontSize={fontSize} mr={1} />} */}
            <NotificationContent>{content}</NotificationContent>
            {dismissable && <CloseIcon alignSelf="flex-start">{/* <IconCabanaClose /> */}</CloseIcon>}
        </NotificationContainer>
    );
}
