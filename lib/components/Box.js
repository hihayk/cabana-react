import styled from 'styled-components';
import {
    borderColor,
    border,
    borderRadius,
    boxShadow,
    space,
    width,
    height,
    fontSize,
    color,
    textAlign,
    fontFamily,
    display,
} from 'styled-system';

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${fontSize}
  ${color}
  ${border}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${textAlign}
  ${fontFamily}
  ${display}
`;

export default Box;
