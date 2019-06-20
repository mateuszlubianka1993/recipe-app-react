import React from 'react';

const RecipesList = (props) => {
    
    const listOfRecipes = props.recipes.map((recipe, index) => <div key={index}>Rec</div>)

    return(
        <div className="list-container">
            {listOfRecipes}
        </div>
    );
};

export default RecipesList;
