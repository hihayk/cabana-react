import React from 'react';
import PropTypes from 'prop-types';
import system from '@rebass/components';
import { themeGet } from '@styled-system/theme-get';
import { IconCloseOutline } from 'cabanaico';
import Avatar from './Avatar';

const VERTICAL_PADDING = '4px';

const CloseButton = system(
    {
        is: 'button',
        bg: 'transparent',
        border: 0,
        color: 'inherit',
        px: 0,
        py: 0
    },
    'borders',
    'color',
    'space'
);

const Container = system(
    {
        is: 'span',
        display: 'inline-block',
        bg: 'primary',
        color: 'white',
        borderRadius: 'large',
        textAlign: 'center',
        px: 2,
        py: VERTICAL_PADDING,
        fontFamily: 'default',
        fontSize: 'small',
        lineHeight: 1.5,
        blacklist: ['avatarUrl', 'dismissable'],
    },
    'borderRadius',
    'color',
    'display',
    'fontFamily',
    'fontSize',
    'lineHeight',
    'space',
    'textAlign',
    'verticalAlign',
    props => ({
        paddingLeft: props.avatarUrl ? themeGet('avatarSizes.small', '32px')(props) : '16px',
    })
);

Chip.propTypes = {
    avatarUrl: PropTypes.string,
    dismissable: PropTypes.bool,
    onDismiss: PropTypes.func,
    text: PropTypes.string.isRequired,
};

Chip.defaultProps = {
    avatarUrl: '',
    dismissable: false,
};

export default function Chip(props) {
    const { avatarUrl, text, dismissable, onDismiss } = props;
    const avatarSize = '32px';
    const avatarStyle = `
        margin: -${VERTICAL_PADDING} -${avatarSize}; 
        margin-right: 8px; 
        vertical-align: middle;
    `;
    return (
        <Container {...props} textAlign={avatarUrl ? 'left' : 'center'}>
            {avatarUrl && <Avatar css={avatarStyle} size="small" src={avatarUrl} />}
            {text}{' '}
            {dismissable && (
                <CloseButton onClick={onDismiss}>
                    <IconCloseOutline />
                </CloseButton>
            )}
        </Container>
    );
}
