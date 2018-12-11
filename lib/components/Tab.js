import React, { Component } from 'react';
import PropTypes from 'prop-types';
import system from '@rebass/components';

const Container = system(
    {
        is: 'li',
        display: 'inline-block',
        fontFamily: 'default',
        listStyleType: 'none',
        blacklist: ['listStyleType'],
    },
    'display',
    'fontFamily'
);

const Inner = system(
    {
        is: 'a',
        bg: 'white',
        color: 'primary',
        display: 'inline-block',
        fontSize: 'small',
        lineHeight: '31px',
        px: 3,
        blacklist: ['activeTab'],
    },
    'borders',
    'borderColor',
    'color',
    'display',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'lineHeight',
    'space',
    () => ({
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.2)',
            color: 'rgba(0, 0, 0, 0.7)',
        },
    })
);

const IconContainer = system(
    {
        is: 'div',
        textAlign: 'center',
        fontSize: 24,
    },
    'fontSize',
    'textAlign'
);

class Tab extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: { activeTab, label, py, tabIcon },
        } = this;

        const isActive = activeTab === label;

        return (
            <Container>
                <Inner
                    // href={`#${label}`}
                    activeTab={activeTab === label}
                    borderBottom={2}
                    borderColor={isActive ? 'primary' : 'transparent'}
                    color={isActive ? 'primary' : 'lightGrey'}
                    fontWeight="bold"
                    onClick={onClick}
                    py={py}
                >
                    <IconContainer>{tabIcon}</IconContainer>
                    {label}
                </Inner>
            </Container>
        );
    }
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    py: PropTypes.number,
    tabIcon: PropTypes.node,
};

export default Tab;
