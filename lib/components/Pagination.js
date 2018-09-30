import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Box from './Box';
import { TextPrimitive } from './Text';

const PaginationDot = styled(Box)`
    cursor: pointer;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${({ isActive, activeColor, inactiveColor }) =>
        themeGet(`colors.${isActive ? activeColor : inactiveColor}`)};
    &:hover {
        background-color: ${({ isActive, activeHoverColor, inactiveHoverColor }) =>
            themeGet(`colors.${isActive ? activeHoverColor : inactiveHoverColor}`)};
    }
`;

const PaginationNumber = styled(TextPrimitive)`
    cursor: pointer;
    color: ${({ isActive, activeColor, inactiveColor }) =>
        themeGet(`colors.${isActive ? activeColor : inactiveColor}`)};
    &:hover {
        color: ${({ isActive, activeHoverColor, inactiveHoverColor }) =>
            themeGet(`colors.${isActive ? activeHoverColor : inactiveHoverColor}`)};
    }
`;

PaginationNumber.defaultProps = {
    fontSize: 'h5',
    fontWeight: 'bold',
    color: 'lightGrey',
    inactiveHoverColor: 'grey',
    inactiveColor: 'lightGrey',
    activeColor: 'primary',
    activeHoverColor: 'tertiary',
    mx: 1,
};

PaginationDot.defaultProps = {
    borderRadius: 'large',
    bg: 'lightGrey',
    display: 'block',
    ml: 1,
    inactiveHoverColor: 'grey',
    inactiveColor: 'lightGrey',
    activeColor: 'primary',
    activeHoverColor: 'tertiary',
    size: 8,
};

Pagination.defaultProps = {
    number: [0, 1, 2, 3, 4, 5],
};

export default function Pagination({ number, size, type }) {
    return (
        <Box display="flex">
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
        </Box>
    );
}
