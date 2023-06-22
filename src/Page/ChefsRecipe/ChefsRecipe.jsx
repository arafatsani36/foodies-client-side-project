import React from 'react';
import { Container } from 'react-bootstrap';

const ChefsRecipe = ({singleChef}) => {
    return (
        <Container className='mt-5 '>
            
<div className='row row-cols-1 row-cols-lg-2'>
            <div className=''>
                <img className='img-fluid' src={singleChef?.chefPicture} alt="" />
                <h4 className='mb-2'>Name: {singleChef.chefName}</h4>
                <p className='mb-2'>Years Of Experience: {singleChef.yearsOfExperience}</p>
                <p className='mb-2'>Number Of Recipes: {singleChef.numOfRecipes}</p>
                <p className='mt-2'>Likes: {singleChef.likes}</p>
                <p className='mt-0'>Description: {singleChef.description}</p>

                
            </div>

             

            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Recipe Name: {singleChef.fast_recipe_name}</h5>
                <p className="card-text">Recipe Ingredients:</p>
                <p className="card-text">{singleChef.fast_recipe_ingredients.number_one}</p>
                <p className="card-text">{singleChef.fast_recipe_ingredients.number_two}</p>
                <p className="card-text">{singleChef.fast_recipe_ingredients.number_three}</p>
                <p className="card-text">{singleChef.fast_recipe_ingredients.number_four}</p>
                <p className="card-text">{singleChef.fast_recipe_ingredients.number_five}</p>

                <p className="card-text">Cooking Method:</p>
                <p className="card-text">{singleChef.fast_recipe_cooking_method.number_one}</p>
                <p className="card-text">{singleChef.fast_recipe_cooking_method.number_two}</p>
                <p className="card-text">{singleChef.fast_recipe_cooking_method.number_three}</p>
                <p className="card-text">{singleChef.fast_recipe_cooking_method.number_four}</p>
                <p>Rating: {singleChef.fast_recipe_rating}</p>
                <a href="#" className="btn btn-primary">Favorite</a>
            </div>

            <div className="card-body">
            <h5 className="card-title">Recipe Name: {singleChef.second_recipe_name}</h5>
                <p className="card-text">Recipe Ingredients:</p>
                <p className="card-text">{singleChef.second_recipe_ingredients.number_one}</p>
                <p className="card-text">{singleChef.second_recipe_ingredients.number_two}</p>
                <p className="card-text">{singleChef.second_recipe_ingredients.number_three}</p>
                <p className="card-text">{singleChef.second_recipe_ingredients.number_four}</p>
                <p className="card-text">{singleChef.second_recipe_ingredients.number_five}</p>

                <p className="card-text">Cooking Method:</p>
                <p className="card-text">{singleChef.second_recipe_cooking_method.number_one}</p>
                <p className="card-text">{singleChef.second_recipe_cooking_method.number_two}</p>
                <p className="card-text">{singleChef.second_recipe_cooking_method.number_three}</p>
                <p className="card-text">{singleChef.second_recipe_cooking_method.number_four}</p>
                <p>Rating: {singleChef.second_recipe_rating}</p>
                
                <a href="#" className="btn btn-primary">Favorite</a>
            </div>

            <div className="card-body">
            <h5 className="card-title">Recipe Name: {singleChef.third_recipe_name}</h5>
                <p className="card-text">Recipe Ingredients:</p>
                <p className="card-text">{singleChef.third_recipe_ingredients.number_one}</p>
                <p className="card-text">{singleChef.third_recipe_ingredients.number_two}</p>
                <p className="card-text">{singleChef.third_recipe_ingredients.number_three}</p>
                <p className="card-text">{singleChef.third_recipe_ingredients.number_four}</p>
                <p className="card-text">{singleChef.third_recipe_ingredients.number_five}</p>

                <p className="card-text">Cooking Method:</p>
                <p className="card-text">{singleChef.third_recipe_cooking_method.number_one}</p>
                <p className="card-text">{singleChef.third_recipe_cooking_method.number_two}</p>
                <p className="card-text">{singleChef.third_recipe_cooking_method.number_three}</p>
                <p className="card-text">{singleChef.third_recipe_cooking_method.number_four}</p>
                <p>Rating: {singleChef.third_recipe_rating}</p>
                
                <a href="#" className="btn btn-primary">Favorite</a>
            </div>
            </div>

            </div>
            
            
        </Container>
    );
};

export default ChefsRecipe;