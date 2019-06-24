import React from 'react';
import './styles/Recipe.css';

const Recipe = ({recipe}) => {

    return(
        <div className="card recipe-container">
            <img src={recipe.recipe.image} className="card-img-top" alt={recipe.recipe.label}/>
            <div className="card-body">
                <h5 className="card-title">{recipe.recipe.label}</h5>
                <p className="card-text">Health labels: {recipe.recipe.healthLabels.map(label=><span className="badge badge-secondary badge-success" key={label}> {label}</span>)}</p>
                <div className="description-container">
                    <div className="description-box">
                        <div className="alert alert-primary" role="alert">
                            {recipe.recipe.calories.toFixed(2)} kcal
                        </div>
                        <div className="alert alert-primary" role="alert">
                            Fat: {recipe.recipe.digest[0].total.toFixed(2)} g
                        </div>
                        <div className="alert alert-primary" role="alert">
                            Carbs: {recipe.recipe.digest[1].total.toFixed(2)} g
                        </div>
                        <div className="alert alert-primary" role="alert">
                            Protein: {recipe.recipe.digest[2].total.toFixed(2)} g
                        </div>
                        <div className="alert alert-primary" role="alert">
                            Cholesterol: {recipe.recipe.digest[3].total.toFixed(2)} mg
                        </div>
                    </div>
                    <div className="description-box">
                        {recipe.recipe.ingredientLines.map(ingredient=><div className="alert alert-primary" key={ingredient} role="alert">{ingredient}</div>)}
                    </div>
                </div>
                <a href={recipe.recipe.url} className="btn btn-primary">Get Recipe</a>
            </div>
        </div>
    );
};

export default Recipe;
