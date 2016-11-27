/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';

class HCell extends React.Component {
    constructor(props) {
        super(props);
        this.onSortClick = this.onSortClick.bind(this);
    }

    onSortClick() {
        this.props.onSortClick(this.props.sortId);
    }

    render() {
        var arrow = this.props.data == -1 ? "-long-arrow-down" : this.props.data == 1 ? "-long-arrow-up" : "-arrows-v";
        return (
            <td className="hcell" onClick={this.onSortClick}>
                <span className="hname">{this.props.sortId}</span>
                <i className={"fa fa" + arrow} aria-hidden="true"></i>
            </td>
        );
    }
}

export default HCell