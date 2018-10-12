import Box from './Box';
import Icon from './Icon';
import React from 'react';
import styled from 'styled-components';
import system from 'system-components';

const NotificationContainer = system({
    is: Box,
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    blacklist: ['dismissable', 'icon', 'content'],
});

const NotificationContent = styled(Box)`
    flex-grow: 1;
`;

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
