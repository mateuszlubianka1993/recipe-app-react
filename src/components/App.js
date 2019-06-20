import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    inputValue: '',
  };

  onInputChange = (e) => {
    this.setState({inputValue: e.target.value});
    // console.log(this.state.inputValue);
  };

  render() {
    return(
      <div>
        <Header />
        <SearchBar onInputChange={this.onInputChange}/>
      </div>
    );
  };
};

export default App;
