/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';
import Header from './Header';
import Rows from './Rows';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.data.length) {
            return (
                <div className="loading">Loading...</div>
            );
        }

        return (
            <table>
                <thead>
                <Header
                    headerData={this.props.headerData}
                    onSortClick={this.props.onSortClick}
                />
                </thead>
                <Rows filterText={this.props.filterText} data={this.props.data}/>
            </table>
        );
    }
}

export default Table