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
        p: 1,
        display: 'inline-block',
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
    () => ({
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.2)',
            color: 'rgba(0, 0, 0, 0.7)',
        },
    })
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
            props: { activeTab, label, py },
        } = this;

        const isActive = activeTab === label;

        return (
            <Container>
                <Inner
                    href={`#${label}`}
                    borderBottom={2}
                    borderColor={isActive ? 'primary' : 'transparent'}
                    color={isActive ? 'primary' : 'lightGrey'}
                    onClick={onClick}
                    activeTab={activeTab === label}
                    fontWeight="bold"
                    py={py}
                >
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
};

export default Tab;
