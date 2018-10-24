// import styled from 'styled-components';
import system from '@rebass/components';
const styledSystemFunctions = [
    // core
    'space',
    'width',
    'color',
    'fontSize',
    // borders
    'borders',
    'borderColor',
    'borderRadius',
    'boxShadow',
    // layout
    'display',
    'maxWidth',
    'minWidth',
    'height',
    'maxHeight',
    'minHeight',
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
    // position
    'position',
    'zIndex',
    'top',
    'right',
    'bottom',
    'left',
    'lineHeight',
];
const Box = system({ fontFamily: 'default' }, ...styledSystemFunctions);
Box.displayName = 'Box';

export default Box;
