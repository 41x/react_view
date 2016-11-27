/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';
import Row from './Row';

class Rows extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var data = this.props.data;
        if (this.props.filterText.length) {
            data = data.filter(function (x) {
                var values = Object.keys(x).map(function (key) {
                    return x[key];
                });

                var i = 0;
                while (
                i < values.length
                && !values[i].toString().toLowerCase()
                    .includes(this.props.filterText.toLowerCase())
                    ) i++;
                return i < values.length;
            }.bind(this));
        }

        var rows = data.map(function (item, index) {
            return (
                <Row
                    key={index}
                    data={item}
                />
            );
        });

        return (
            <tbody>
            {rows}
            </tbody>
        );
    }
}

export default Rows