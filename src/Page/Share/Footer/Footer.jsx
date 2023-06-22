import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt,FaMapMarkerAlt,FaFacebookF,FaInstagram,FaTelegramPlane,FaTwitter } from "react-icons/fa";
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className=' bg-black p-5 mt-4'>
            <Container>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4">
                <div className="col">
                    <h4 className=' text-white'>foodies</h4>
                    <p className='text-info'>Food for the body is not enough. There must be food for the soul.</p>
                </div>
                <div className="col">
                    <h4 className=' text-white'>Information</h4>
                    <Link  to='' className=' d-block text-white text-decoration-none'>Offer</Link>
                    <Link to='' className=' d-block text-white text-decoration-none'>Events</Link>
                    <Link to='' className=' d-block text-white text-decoration-none'>About</Link>
                    <Link to='' className=' d-block text-white text-decoration-none'>Contact</Link>
                    <Link to='' className=' d-block text-white text-decoration-none'>10am - 11pm</Link>
                </div>
                <div className="col">
                   <h4 className=' text-white'>Address</h4>
                   <p className=' text-white'><FaMapMarkerAlt></FaMapMarkerAlt> Piazza Giuseppe Garibaldi 138</p>
                   <p className=' text-white'><FaPhoneAlt></FaPhoneAlt> +39 0315 7573469</p>
                   <p className=' text-white'><FaPhoneAlt></FaPhoneAlt> +39 0345 8049775</p>
                </div>
                <div className="col">
                 <h4 className=' text-white'>Social media</h4>
                 <div className='ml-4'>
                 <Link to='' className='text-white fs-5'><FaFacebookF></FaFacebookF></Link> 
                 <Link to='' className=' text-white ms-3 fs-5'><FaInstagram></FaInstagram></Link>  
                 <Link to='' className='text-white ms-3 fs-5'><FaTelegramPlane></FaTelegramPlane></Link>  
                 <Link to='' className='text-white ms-3 fs-5'><FaTwitter></FaTwitter></Link>  

                 </div>
                </div>
            </div>
            </Container>
        </div>  
    );
};

export default Footer;