import React from 'react';
import { themeGet } from 'styled-system';
import Box from './Box';
import system from '@rebass/components';
import { IconArrowLeft, IconArrowRight } from 'cabanaico';

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
        fontSize: 'h5',
        fontFamily: 'default',
        fontWeight: 'bold',
        color: 'lightGrey',
        inactiveHoverColor: 'grey',
        inactiveColor: 'lightGrey',
        activeColor: 'primary',
        activeHoverColor: 'tertiary',
        mx: 1,
        blacklist: ['isActive', 'activeHoverColor', 'activeColor', 'inactiveColor', 'inactiveHoverColor'],
    },
    'fontSize',
    'fontWeight',
    'fontFamily',
    'color',
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
    'color',
    'border',
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

export default function Pagination({ number, size, type }) {
    return (
        <Box display="flex">
            <PaginationArrow>
                <IconArrowLeft />
            </PaginationArrow>
            {number.map(item => {
                if (type === 'numbers') {
                    return (
                        <PaginationNumber key={item} title={item} isActive={item === 3}>
                            {item}
                        </PaginationNumber>
                    );
                }
                return <PaginationDot size={size} key={item} title={item} isActive={item === 3} />;
            })}
            <PaginationArrow>
                <IconArrowRight />
            </PaginationArrow>
        </Box>
    );
}
