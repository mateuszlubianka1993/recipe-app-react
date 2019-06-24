import React from 'react';
import './styles/SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    };

    render() {
        const clear = () => { 
            this.inputRef.current.value = '';
        };
        return(
            <form onSubmit={this.props.onFormSubmit} className="container search-container">
                <input onChange={this.props.onInputChange} ref={this.inputRef} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <button type="submit" onClick={clear} className="btn btn-primary btn-lg btn-block">Search new recipes</button>
            </form>
        );
    };
};

export default SearchBar;