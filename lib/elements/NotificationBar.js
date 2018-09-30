import React from 'react';
import styled from 'styled-components';
import { boxShadow, space, width, fontSize, color, borderRadius } from 'styled-system';
import Icon from './Icon';
const NotificationContainer = styled.div`
    display: flex;
    align-items: center;
    ${space}
    ${width}
    ${fontSize}
    ${color}
    ${borderRadius}
    ${boxShadow}
`;

const NotificationContent = styled.div`
    flex-grow: 1;
`;

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

NotificationBar.defaultProps = {
    content: 'Foo',
    bg: 'primary',
    color: 'white',
    dismissable: true,
    icon: true,
    borderRadius: 'small',
    p: 1,
    fontSize: 'body',
};
