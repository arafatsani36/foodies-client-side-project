import React from 'react';
import Footer from '../Page/Share/Footer/Footer';
import Header from '../Page/Share/Header/Header';
import { Outlet } from 'react-router-dom';

const SingleChefRecipe = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SingleChefRecipe;