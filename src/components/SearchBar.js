import React from 'react';

// const SearchBar = (props) => {

//     return(
//         <form onSubmit={props.onFormSubmit} className="container">
//             <input onChange={props.onInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
//             <button type="submit" className="btn btn-primary btn-lg btn-block">Search new recipes</button>
//         </form>
//     );
// };

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
            <form onSubmit={this.props.onFormSubmit} className="container">
                <input onChange={this.props.onInputChange} ref={this.inputRef} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <button type="submit" onClick={clear} className="btn btn-primary btn-lg btn-block">Search new recipes</button>
            </form>
        );
    };
};

export default SearchBar;