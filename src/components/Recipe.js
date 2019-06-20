import React from 'react';

const Recipe = ({recipe}) => {

    return(
        <div>{recipe.recipe.label}</div>
    );
};

export default Recipe;
