import React, { Component } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const Container = styled.ul`
    padding: 0;
`;

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
        this.onClickTabItem = this.onClickTabItem.bind(this);
    }

    onClickTabItem(tab) {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab },
        } = this;

        return (
            <div>
                <Container>
                    {children.map(child => {
                        const { label, tabIcon } = child.props;
                        return (
                            <Tab
                                activeTab={activeTab}
                                tabIcon={tabIcon}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </Container>
                <div>
                    {children.map(child => {
                        if (child.props.label !== activeTab) {
                            return undefined;
                        }
                        return child;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
