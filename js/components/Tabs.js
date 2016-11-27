/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';
import Tab from './Tab';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var tabs;
        if (this.props.api.length > 0) {
            tabs = this.props.api.map(function (item, index) {
                return (
                    <Tab
                        onTabClick={this.props.onTabClick}
                        name={item.name}
                        key={index}
                        num={index}
                        activeTab={this.props.activeTab}
                    />
                );
            }.bind(this));
        } else {
            tabs = <span>'Данных нет'</span>;
        }

        return (
            <ul>
                {tabs}
            </ul>
        );
    }
}

export default Tabs