import React from 'react';

const SearchBar = (props) => {

    return(
        <form className="container">
            <input onChange={props.onInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Search new recipes</button>
        </form>
    );
};

export default SearchBar;