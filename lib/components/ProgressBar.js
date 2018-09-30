import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, borderRadius, fontSize } from 'styled-system';
import Box from './Box';

const Outer = styled(Box)`
    display: flex;
    position: relative;
    ${borderRadius};
`;

const Inner = styled(Box)`
    display: inline-block;
    transition-property: width;
    transition-timing-function: ease;
    transition-duration: ${props => `${props.animationDuration}ms`};
    box-sizing: border-box;
    ${color};
    ${borderRadius};
    ${fontSize};
    &:empty {
        height: 20px;
    }
`;

const NumberLabel = styled(Box)`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    ${color};
`;

NumberLabel.defaultProps = {
    pl: 1,
    color: 'white',
};

Outer.defaultProps = {
    bg: 'lightGrey',
};

Inner.defaultProps = {
    bg: 'primary',
    fontSize: 'small',
};

ProgressBar.defaultProps = {
    amount: 1 / 2,
    borderRadius: 'small',
    animationDuration: 0,
    showNumber: true,
};

ProgressBar.propTypes = {
    amount: PropTypes.number,
    outerBg: PropTypes.string,
    innerBg: PropTypes.string,
    animationDuration: PropTypes.number,
    showNumber: PropTypes.bool,
};

export default function ProgressBar({
    amount,
    outerBg,
    innerBg,
    borderRadius,
    color,
    animationDuration,
    p,
    fontSize,
    showNumber,
}) {
    return (
        <Outer borderRadius={borderRadius} bg={outerBg} p={p}>
            <NumberLabel color={color}>{showNumber && `${amount}%`}</NumberLabel>
            <Inner
                bg={innerBg}
                borderRadius={borderRadius}
                animationDuration={animationDuration}
                style={{ width: `${amount}%` }}
                fontSize={fontSize}
            />
        </Outer>
    );
}
