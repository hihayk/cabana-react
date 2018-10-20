import PropTypes from 'prop-types';
import React from 'react';
import system from '@rebass/components';

const NumberLabel = system(
    {
        pl: 1,
    },
    'fontSize',
    'fontFamily',
    'space',
    'color',
    () => ({
        zIndex: 1,
    })
);

const Outer = system(
    {
        display: 'flex',
        position: 'relative',
        borderRadius: 'none',
    },
    'display',
    'position',
    'borderRadius',
    'space',
    'color',
    'minHeight'
);

const Inner = system(
    {
        display: 'flex',
        position: 'relative',
        width: '100%',
    },
    'display',
    'position',
    'width'
);

const Bar = system(
    {
        transitionProperty: 'width',
        transitionTimingFunction: 'ease',
        blacklist: ['boxSizing', 'transitionProperty', 'transitionTimingFunction', 'animationDuration'],
        height: '100%',
    },
    'color',
    'height',
    'borderRadius',
    'fontSize',
    'position',
    props => ({
        position: 'absolute',
        transitionDuration: `${props.animationDuration}ms`,
    })
);

ProgressBar.defaultProps = {
    amount: 1 / 2,
    borderRadius: 'small',
    animationDuration: 150,
    showNumber: true,
    innerBg: 'primary',
    outerBg: 'lightGrey',
    color: 'white',
    fontFamily: 'default',
    fontSize: 'tiny',
    p: 0,
    minHeight: 0,
};

ProgressBar.propTypes = {
    amount: PropTypes.number.isRequired,
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
    fontFamily,
    showNumber,
    minHeight,
}) {
    return (
        <Outer borderRadius={borderRadius} bg={outerBg} p={p} minHeight={minHeight}>
            <Inner>
                <NumberLabel fontSize={fontSize} fontFamily={fontFamily} color={color}>
                    {showNumber && `${amount}%`}
                </NumberLabel>
                <Bar
                    bg={innerBg}
                    borderRadius={borderRadius}
                    animationDuration={animationDuration}
                    style={{ width: `${amount}%` }}
                    fontSize={fontSize}
                />
            </Inner>
        </Outer>
    );
}
