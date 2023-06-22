import React from 'react';
import Header from '../Page/Share/Header/Header';
import Footer from '../Page/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;