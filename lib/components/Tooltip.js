import PropTypes from 'prop-types';
import ReactSimpleTooltip from 'react-simple-tooltip';
import styled from 'styled-components';
import { fontFamily, space } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

const Tooltip = styled(ReactSimpleTooltip).attrs(props => ({
    // These need to be added as 'attributes' to the underlying react-simple-tooltip
    /*
        todo: these fallbacks are a bit hacky, because if the user enters values not
        resolved by themeGet(), we basically need to assume they are overriding with
        their own value like 'red' or '242' for border radius.
     */
    background: themeGet(`colors.${props.bg}`, props.bg)(props),
    border: themeGet(`colors.${props.borderColor}`, props.borderColor)(props),
    radius: parseInt(themeGet(`radii.${props.borderRadius}`, props.borderRadius)(props), 0),
}))`
    ${fontFamily};
    ${space};
    & > div {
        color: ${({ color }) => themeGet(`colors.${color}`)};
        box-shadow: ${({ boxShadow }) => themeGet(`shadows.${boxShadow}`)};
    }
`;

// todo, try to set proptypes for colours etc using the styled system spreading
Tooltip.propTypes = {
    arrow: PropTypes.oneOf([4, 8, 16, 24, 32]),
    bg: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.oneOf(['none', 'small', 'large']),
    boxShadow: PropTypes.oneOf([0, 20, 40, 60, 80, 100]),
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    content: PropTypes.node.isRequired,
    fadeDuration: PropTypes.number,
    fadeEasing: PropTypes.oneOf(['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']),
    fixed: PropTypes.bool,
    fontSize: PropTypes.string,
    offset: PropTypes.number,
    padding: PropTypes.number,
    placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    zIndex: PropTypes.number,
};

Tooltip.defaultProps = {
    arrow: 8,
    bg: 'primary',
    borderColor: 'primary',
    borderRadius: 'small',
    boxShadow: 20,
    color: 'white',
    content: 'Tooltip',
    fadeDuration: 200,
    fadeEasing: 'ease',
    fixed: false,
    fontFamily: 'inherit',
    fontSize: 'small',
    offset: 0,
    placement: 'right',
    zIndex: 1,
};

export default Tooltip;
