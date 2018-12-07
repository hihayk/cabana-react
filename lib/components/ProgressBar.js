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
    animationDuration: PropTypes.number,
    borderRadius: PropTypes.number,
    color: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    innerBg: PropTypes.string,
    minHeight: PropTypes.number,
    outerBg: PropTypes.string,
    p: PropTypes.number,
    showNumber: PropTypes.bool,
};

export default function ProgressBar({
    amount,
    animationDuration,
    borderRadius,
    color,
    fontFamily,
    fontSize,
    innerBg,
    minHeight,
    outerBg,
    p,
    showNumber,
}) {
    return (
        <Outer bg={outerBg} borderRadius={borderRadius} minHeight={minHeight} p={p}>
            <Inner>
                <NumberLabel color={color} fontFamily={fontFamily} fontSize={fontSize}>
                    {showNumber && `${amount}%`}
                </NumberLabel>
                <Bar
                    animationDuration={animationDuration}
                    bg={innerBg}
                    borderRadius={borderRadius}
                    fontSize={fontSize}
                    style={{ width: `${amount}%` }}
                />
            </Inner>
        </Outer>
    );
}
