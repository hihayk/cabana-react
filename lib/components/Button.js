import React, { Fragment } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import {
    borderColor,
    space,
    color,
    boxShadow,
    themeGet,
    fontSize,
    letterSpacing,
    lineHeight,
    fontFamily,
    fontWeight,
    borderRadius,
} from 'styled-system';

const BaseButton = styled.button`
    ${space};
    ${fontSize};
    ${letterSpacing};
    ${lineHeight};
    ${boxShadow};
    ${color};
    ${borderColor};
    ${fontFamily};
    ${fontWeight};
    ${borderRadius};
    border: 1px solid;
    &:hover {
        opacity: 0.9;
    }

    &:focus {
        outline: 2px solid ${props => themeGet(`colors.${props.bg}`)};
        outline-offset: 1px;
    }
`;

/*
     No need to understand the theme here, just 'feed' the right value 
     to the component and it will access the theme internally.
*/
BaseButton.defaultProps = {
    boxShadow: 20,
    fontWeight: 'bold',
    borderRadius: 'small',
};

BaseButton.propTypes = {
    ...space.PropTypes,
    ...fontSize.PropTypes,
    ...letterSpacing.PropTypes,
    ...lineHeight.PropTypes,
    ...boxShadow.PropTypes,
    ...color.PropTypes,
    ...borderColor.PropTypes,
    ...fontFamily.PropTypes,
    ...fontWeight.PropTypes,
    ...borderRadius.PropTypes,
};

const ButtonContent = props => (
    <Fragment>
        {props.iconLeft && <Icon mr={1} fontSize={props.fontSize} stroke={props.color} />}
        {props.children}
        {props.iconRight && <Icon ml={1} fontSize={props.fontSize} stroke={props.color} />}
    </Fragment>
);

const Button = props => (
    <BaseButton py={1} px={3} fontSize="body" {...props}>
        <ButtonContent fontSize="body" {...props} />
    </BaseButton>
);
const ButtonSmall = props => (
    <BaseButton py={1} px={2} fontSize="caption" letterSpacing="tiny" lineHeight="body" {...props}>
        <ButtonContent fontSize="caption" {...props} />
    </BaseButton>
);
const ButtonLarge = props => (
    <BaseButton py={1} px={4} fontSize="h5" letterSpacing="tiny" lineHeight="31px" {...props}>
        <ButtonContent fontSize="h5" {...props} />
    </BaseButton>
);

export { ButtonSmall, Button, ButtonLarge };
