import PropTypes from 'prop-types';
import { IconX } from 'featherico';
import styled from 'styled-components';
import { space, fontSize, style, alignSelf } from 'styled-system';

const svgStrokeColor = style({
    prop: 'color',
    cssProperty: 'stroke',
    key: 'colors',
});

const Icon = styled(IconX)`
    ${space};
    ${alignSelf};
    ${fontSize};
    ${svgStrokeColor};
`;

export default Icon;

Icon.defaultProps = {
    color: 'currentColor',
    fontSize: 'uber',
};

Icon.propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
};
