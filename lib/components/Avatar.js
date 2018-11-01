import { themeGet } from 'styled-system';
import system from '@rebass/components';

const Avatar = system(
    {
        is: 'img',
        borderRadius: 'large',
        size: 'large',
        blacklist: ['avatarSize'],
    },
    'space',
    'width',
    'height',
    'borderRadius',
    'lineHeight',
    'verticalAlign',
    props => ({
        width: themeGet(`avatarSizes.${props.size}`, '2')(props),
        height: themeGet(`avatarSizes.${props.size}`, '2')(props),
    })
);

export default Avatar;
