// import styled from 'styled-components';
import system from 'system-components';

const Box = system(
    { fontFamily: 'default' },
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
    'lineHeight'
);
Box.displayName = 'Box';
// const Box = styled.div`
//     ${alignContent};
//     ${alignItems};
//     ${alignSelf};
//     ${border};
//     ${borderColor};
//     ${borderRadius};
//     ${boxShadow};
//     ${bottom};
//     ${color};
//     ${display};
//     ${flex};
//     ${flexBasis};
//     ${flexDirection};
//     ${flexShrink};
//     ${flexWrap};
//     ${fontSize};
//     ${fontFamily};
//     ${height};
//     ${justifyContent};
//     ${justifySelf};
//     ${left};
//     ${maxHeight};
//     ${maxWidth};
//     ${minHeight};
//     ${minWidth};
//     ${order};
//     ${position};
//     ${right};
//     ${space};
//     ${top};
//     ${width};
//     ${zIndex};
// `;

// Box.defaultProps = {
//     fontFamily: 'default',
// };

export default Box;
