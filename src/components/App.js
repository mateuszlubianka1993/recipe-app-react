import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';

class App extends React.Component {
  state = {
    inputValue: '',
    recipes: []
  };

  onInputChange = (e) => {
    this.setState({inputValue: e.target.value});
    // console.log(this.state.inputValue);
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
    const app_id = 'b8f9837b';
    const app_key = '93b80432c253167006389245910e5a22';
    const apiUrl = `https://api.edamam.com/search?q=${this.state.inputValue}&app_id=${app_id}&app_key=${app_key}`;
    
    fetch(apiUrl)
      .then(response => {
        if(response.ok) {
          return response;
        }
        throw Error('Something went wrong, try again')
      })
      .then(response => response.json())
      .then(result => {
        this.setState({
          recipes: [...result.hits]
        });
      })
      .catch(err => {
        // this.setState({error: true})
        console.log(err)
      })
      console.log(this.state.recipes)
  };

  render() {
    return(
      <div>
        <Header />
        <SearchBar 
        onInputChange={this.onInputChange}
        onFormSubmit={this.onFormSubmit}/>
        <RecipesList recipes={this.state.recipes}/>
      </div>
    );
  };
};

export default App;
