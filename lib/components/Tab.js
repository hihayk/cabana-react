import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, fontSize, borders, borderColor, fontWeight } from 'styled-system';

const Container = styled.li`
    display: inline-block;
`;
const Inner = styled.a`
    ${borders};
    ${borderColor};
    ${color};
    ${fontSize};
    ${space};
    ${fontWeight};
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    &:hover {
        border-color: rgba(0, 0, 0, 0.2);
        color: rgba(0, 0, 0, 0.7);
    }
`;

Inner.defaultProps = {
    bg: 'white',
    color: 'primary',
    fontSize: 'small',
    p: 1,
};

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
