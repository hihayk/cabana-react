import Box from './Box';
import React from 'react';
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
        borderRadius: 'large',
        textAlign: 'center',
        px: 2,
        py: VERTICAL_PADDING,
        fontFamily: 'default',
        fontSize: 'small',
        lineHeight: 1.5,
        blacklist: ['hasAvatar'],
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
        foo: console.log(props),
        paddingLeft: props.hasAvatar ? themeGet('avatarSizes.small', '32px')(props) : '16px',
    })
);

export default function Chip(props) {
    const { avatarUrl, text, dismissable, bg, color } = props;
    const avatarSize = '32px';
    const avatarStyle = `
        margin: -${VERTICAL_PADDING} -${avatarSize}; 
        margin: -${VERTICAL_PADDING} -${avatarSize}; 
        margin-right: 8px; 
        vertical-align: middle;
    `;
    return (
        <Inner bg={bg} color={color} hasAvatar={avatarUrl}>
            {avatarUrl && <Avatar css={avatarStyle} size="small" src={avatarUrl} />}
            {text} {dismissable && <span>x</span>}
        </Inner>
    );
}
