import {
    alignContent,
    alignItems,
    alignSelf,
    border,
    borderColor,
    borderRadius,
    bottom,
    boxShadow,
    color,
    display,
    flex,
    flexBasis,
    flexDirection,
    flexShrink,
    flexWrap,
    fontFamily,
    fontSize,
    height,
    justifyContent,
    justifySelf,
    left,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    order,
    position,
    right,
    space,
    top,
    width,
    zIndex,
} from 'styled-system';

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
    'left'
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
