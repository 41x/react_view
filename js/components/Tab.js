/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick() {
        this.props.onTabClick(this.props.num);
    }

    render() {
        return (
            <li
                ref={(input) => this.tab = input}
                className={this.props.num == this.props.activeTab ? "activeTab" : ""}
                onClick={this.handleTabClick}
            >
                <span>{this.props.name}</span>
            </li>
        );
    }
}

export default Tab