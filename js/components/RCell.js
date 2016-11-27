/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';

class RCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td>
                {this.props.data}
            </td>
        );
    }
}

export default RCell