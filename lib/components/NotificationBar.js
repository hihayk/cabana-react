import Box from './Box';
import Icon from './Icon';
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
            {icon && <Icon fontSize={fontSize} mr={1} />}
            <NotificationContent>{content}</NotificationContent>
            {dismissable && <Icon fontSize="body" ml={1} alignSelf="flex-start" />}
        </NotificationContainer>
    );
}
