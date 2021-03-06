/**
 * Created by alxnam on 27.11.16.
 */
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value
        );
    }

    render() {
        return (
            <form className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref={(input) => this.filterTextInput = input}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default SearchBar