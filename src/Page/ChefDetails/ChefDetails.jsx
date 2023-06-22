import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ChefRecipe from '../ChefRecipe/ChefRecipe';
import { Row } from 'react-bootstrap';

const ChefDetails = () => {
    // const {chefName, chef_picture, years_of_experience, numbers_of_recipes, Likes} = chef;

    const [chefs, setChefs] =useState([]);
    useEffect(() =>{
        fetch('https://foodies-server-side.vercel.app/allchef')
        .then(res => res.json())
        .then(data => setChefs(data))
        // console
       
    }, [])

    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4'>
             {
                chefs.map(chef => <ChefRecipe key={chef.id} chef={chef}></ChefRecipe>)
             }
        </div>
    );
};

export default ChefDetails;