import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(result => {})
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div style={{fontSize:'20px'}}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">foodies</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto">

                
                  <Link className='text-white text-decoration-none' to='/'>Home</Link>
                   <Link className='text-white text-decoration-none ms-3' to="/blog">Blog</Link>  
                
            </Nav>
            <Nav>
                {
                    user && <Nav.Link href="#deets"><FaUserAlt></FaUserAlt></Nav.Link>
                }

                
               
                   
                {user ? <button variant='secondary' onClick={handleLogOut}>LogOut</button> : 
                   <Link to='/login'>
                     <button variant='secondary'> Login</button>
                   </Link> 
                }
                   
                    
                
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
};

export default Header;