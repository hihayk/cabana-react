import React from 'react';
import PropTypes from 'prop-types';
import system from '@rebass/components';
import { themeGet } from 'styled-system';
import Avatar from './Avatar';

const VERTICAL_PADDING = '4px';
const Inner = system(
    {
        is: 'span',
        display: 'inline-block',
        bg: 'primary',
        color: 'white',
        borderRadius: 'small',
        textAlign: 'center',
        px: 2,
        py: VERTICAL_PADDING,
        fontFamily: 'default',
        fontSize: 'small',
        lineHeight: 1.5,
        blacklist: ['avatarUrl', 'dismissable'],
    },
    'color',
    'display',
    'space',
    'borderRadius',
    'textAlign',
    'fontFamily',
    'fontSize',
    'lineHeight',
    props => ({
        paddingLeft: props.avatarUrl ? themeGet('avatarSizes.small', '32px')(props) : '16px',
    })
);

export default function Tag(props) {
    const { avatarUrl, text, dismissable } = props;
    const avatarSize = '24px';
    const avatarStyle = `
        margin: -${VERTICAL_PADDING} -${avatarSize}; 
        margin: -${VERTICAL_PADDING} -${avatarSize}; 
        margin-right: 8px; 
        vertical-align: middle;
    `;
    return (
        <Inner {...props} textAlign={avatarUrl ? 'left' : 'center'}>
            {avatarUrl && <Avatar css={avatarStyle} size="smaller" src={avatarUrl} />}
            {text} {dismissable && <span>x</span>}
        </Inner>
    );
}

Tag.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    text: PropTypes.string,
    dismissable: PropTypes.bool,
};
