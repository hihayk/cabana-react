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

import styled from 'styled-components';

const Box = styled.div`
    ${alignContent};
    ${alignItems};
    ${alignSelf};
    ${border};
    ${borderColor};
    ${borderRadius};
    ${boxShadow};
    ${bottom};
    ${color};
    ${display};
    ${flex};
    ${flexBasis};
    ${flexDirection};
    ${flexShrink};
    ${flexWrap};
    ${fontSize};
    ${fontFamily};
    ${height};
    ${justifyContent};
    ${justifySelf};
    ${left};
    ${maxHeight};
    ${maxWidth};
    ${minHeight};
    ${minWidth};
    ${order};
    ${position};
    ${right};
    ${space};
    ${top};
    ${width};
    ${zIndex};
`;

Box.defaultProps = {
    fontFamily: 'default',
};

export default Box;
