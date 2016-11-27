/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';
import RCell from './RCell';

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var cells = Object.keys(this.props.data).map(function (key) {
            return (
                <RCell data={this.props.data[key]} key={key}/>
            );
        }.bind(this));

        return (
            <tr>
                {cells}
            </tr>
        );
    }
}

export default Row