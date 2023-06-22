import React from 'react';
import Header from '../Page/Share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Share/Footer/Footer';

const RegisterLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RegisterLayout;