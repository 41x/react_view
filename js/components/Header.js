/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';
import HCell from './HCell';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var data = this.props.headerData;
        var keys = Object.keys(data);
        var cells = keys.map(function (key) {
            return (
                <HCell
                    key={key}
                    data={data[key]}
                    onSortClick={this.props.onSortClick}
                    sortId={key}
                />
            );
        }.bind(this));
        return (
            <tr>
                {cells}
            </tr>
        );
    }
}

export default Header