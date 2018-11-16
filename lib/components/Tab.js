import React, { Component } from 'react';
import PropTypes from 'prop-types';
import system from '@rebass/components';

const Container = system(
    {
        is: 'li',
        display: 'inline-block',
        listStyleType: 'none',
        fontFamily: 'default',
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
        fontSize: 'small',
        px: 3,
        display: 'inline-block',
        lineHeight: '31px',
        blacklist: ['activeTab'],
    },
    'borders',
    'borderColor',
    'color',
    'fontSize',
    'space',
    'fontWeight',
    'display',
    'fontFamily',
    'lineHeight',
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
    'textAlign',
    'fontSize'
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
                    borderBottom={2}
                    borderColor={isActive ? 'primary' : 'transparent'}
                    color={isActive ? 'primary' : 'lightGrey'}
                    onClick={onClick}
                    activeTab={activeTab === label}
                    fontWeight="bold"
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
    tabIcon: PropTypes.node,
};

export default Tab;
