import React from 'react';
import { Container, Row } from 'react-bootstrap';
import banner from '../../assets/banner.png'
import ChefDetails from '../ChefDetails/ChefDetails';
import { FaCookieBite,FaConciergeBell,FaHome } from "react-icons/fa";
import fast from '../../assets/1st.jpg'
const Home = () => {

    return (
        <div>
            <Container className='mt-2 '>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 d-flex align-items-center justify-content-between">
                <div className="col">
                    <h3 style={{fontSize: '3rem'}}>Are You Hungry...</h3>
                    <h2 style={{fontSize: '5rem'}}>DON'T WAIT</h2>
                    <p style={{fontSize: '1.5rem'}}>Lets Star To Oder Food Now.</p>
                </div>
                <div className="col">
                    <img src={banner} alt="" />
                </div>
            </div>
            
             <ChefDetails></ChefDetails>
            

        
            <div className="row row-cols-1 row-cols-lg-3 mt-4">
                <div className="col">
                    <h2><FaCookieBite></FaCookieBite></h2>
                   <h2>Food Nutritiopns</h2>
                   <p>The doctors of the future will no longer treat the human frame with drugs, but rather will cure and prevent disease with nutrition.</p>
                </div>
                <div className="col">
                    <h2><FaConciergeBell></FaConciergeBell></h2>
                    <h2 >Cooking Period</h2>
                    <p>Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.</p>
                </div>
                <div class="col">
                <h2><FaHome></FaHome></h2>
                <h2>Home delivery</h2>
                <p>Home Delivery Avalable</p>
                </div>
                
            </div>
           


            <div className='mt-5'>
            <h2 class="text-center">Our Food Menu</h2>
            <div className="row row-cols-1 row-cols-lg-3 mt-4">
                <div className="col">
                    <img  className='img-fluid'  src={fast} alt="" />
                   <h2>Pizza</h2>
                   <p>Pizza. Inevitable if we speak about Italian food: pizza is a national symbol, a food that represents Italy in the world, and has been recognized by UNESCO as an Intangible Cultural Heritage of Humanity.</p>
                </div>
                <div className="col">
                    <img className=' img-fluid'  src={fast}  alt="" />
                    <h2 >Pizza</h2>
                    <p>Pizza. Inevitable if we speak about Italian food: pizza is a national symbol, a food that represents Italy in the world, and has been recognized by UNESCO as an Intangible Cultural Heritage of Humanity.</p>
                </div>
                <div class="col">
                <img className=' img-fluid' src={fast}  alt="" />
                <h2>Pizza</h2>
                <p>Pizza. Inevitable if we speak about Italian food: pizza is a national symbol, a food that represents Italy in the world, and has been recognized by UNESCO as an Intangible Cultural Heritage of Humanity.</p>
                </div>
                
            </div>
            </div>

            
           

            </Container>
        </div>
    );
};

export default Home;