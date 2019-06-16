import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';
import Box from './Box';
import system from '@rebass/components';
import { IconArrowIosBackOutline, IconArrowIosForwardOutline } from 'cabanaico';

const PaginationDot = system(
    {
        borderRadius: 'large',
        bg: 'lightGrey',
        display: 'block',
        ml: 1,
        inactiveHoverColor: 'grey',
        inactiveColor: 'lightGrey',
        activeColor: 'primary',
        activeHoverColor: 'tertiary',
        size: 8,
        blacklist: [
            'size',
            'title',
            'isActive',
            'activeHoverColor',
            'activeColor',
            'inactiveColor',
            'inactiveHoverColor',
        ],
        isActive: false,
    },
    'size',
    'color',
    'borderRadius',
    'space',
    props => ({
        cursor: 'pointer',
        backgroundColor: themeGet(`colors.${props.isActive ? props.activeColor : props.inactiveColor}`)(props),
        '&:hover': {
            backgroundColor: themeGet(`colors.${props.isActive ? props.activeHoverColor : props.inactiveHoverColor}`)(
                props
            ),
        },
    })
);

const PaginationNumber = system(
    {
        activeColor: 'primary',
        activeHoverColor: 'tertiary',
        color: 'lightGrey',
        fontFamily: 'default',
        fontSize: 'h5',
        fontWeight: 'bold',
        inactiveColor: 'lightGrey',
        inactiveHoverColor: 'grey',
        mx: 1,
        blacklist: ['isActive', 'activeHoverColor', 'activeColor', 'inactiveColor', 'inactiveHoverColor'],
    },
    'color',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'space',
    props => ({
        cursor: 'pointer',
        color: themeGet(`colors.${props.isActive ? props.activeColor : props.inactiveColor}`)(props),
        '&:hover': {
            color: themeGet(`colors.${props.isActive ? props.activeHoverColor : props.inactiveHoverColor}`)(props),
        },
    })
);

const PaginationArrow = system(
    {
        is: 'button',
        bg: 'transparent',
        border: 'none',
        opacity: 0.3,
    },
    'border',
    'color',
    'opacity',
    () => ({
        '&: hover': {
            opacity: 1,
        },
    })
);

Pagination.defaultProps = {
    number: [0, 1, 2, 3, 4, 5],
};

Pagination.propTypes = {
    number: PropTypes.array.isRequired,
    size: PropTypes.number,
    type: PropTypes.string,
};

export default function Pagination({ number, size, type }) {
    return (
        <Box display="flex">
            <PaginationArrow>
                <IconArrowIosBackOutline />
            </PaginationArrow>
            {number.map(item => {
                if (type === 'numbers') {
                    return (
                        <PaginationNumber isActive={item === 3} key={item} title={item}>
                            {item}
                        </PaginationNumber>
                    );
                }
                return <PaginationDot isActive={item === 3} key={item} size={size} title={item} />;
            })}
            <PaginationArrow>
                <IconArrowIosForwardOutline />
            </PaginationArrow>
        </Box>
    );
}
