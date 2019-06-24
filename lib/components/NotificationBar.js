import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';
import { IconCloseOutline } from 'cabanaico';
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
    'space',
    () => ({
        padding: 0,
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
    p: 1,
};

NotificationBar.propTypes = {
    content: PropTypes.any,
    dismissable: PropTypes.bool,
    icon: PropTypes.node,
};

export default function NotificationBar(props) {
    const { dismissable, content, icon } = props;
    return (
        <NotificationContainer {...props}>
            {icon}
            <NotificationContent ml={icon ? 1 : 0}>{content}</NotificationContent>
            {dismissable && (
                <CloseIcon alignSelf="flex-start" ml={1}>
                    <IconCloseOutline />
                </CloseIcon>
            )}
        </NotificationContainer>
    );
}
