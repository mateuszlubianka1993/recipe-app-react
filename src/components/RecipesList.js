import React from 'react';
import Recipe from './Recipe';
import './styles/RecipesList.css';

const RecipesList = (props) => {
    
    const listOfRecipes = props.recipes.map((recipe, index) => <Recipe recipe={recipe} key={index}/>)

    return(
        <div className="list-container container">
            {listOfRecipes}
        </div>
    );
};

export default RecipesList;
