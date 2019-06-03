import React from 'react';
import PropTypes from 'prop-types';
import system from '@rebass/components';
import { themeGet } from 'styled-system';
import Avatar from './Avatar';

const VERTICAL_PADDING = '4px';
const Inner = system(
    {
        is: 'span',
        bg: 'primary',
        borderRadius: 'small',
        color: 'white',
        display: 'inline-block',
        fontFamily: 'default',
        fontSize: 'small',
        lineHeight: 1.5,
        px: 2,
        py: VERTICAL_PADDING,
        textAlign: 'center',
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
    avatarUrl: PropTypes.string,
    dismissable: PropTypes.bool,
    text: PropTypes.string,
};
