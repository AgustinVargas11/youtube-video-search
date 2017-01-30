import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    };

    render() {
        return (
            <div className="search-bar">
                <input
                    className="form-control"
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}/>
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;