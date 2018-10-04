import { borderRadius, color, fontSize } from 'styled-system';

import Box from './Box';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import system from 'system-components';

const NumberLabel = system({
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    pl: 1,
    color: 'white',
});

const Outer = system({
    display: 'flex',
    position: 'relative',
    bg: 'lightGrey',
    borderRadius: 'none',
});

// @todo how to do ampersand in styled-system?
const Inner = styled.div`
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

Inner.defaultProps = {
    bg: 'primary',
    fontSize: 'small',
};

ProgressBar.defaultProps = {
    amount: 1 / 2,
    borderRadius: 'small',
    animationDuration: 150,
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
