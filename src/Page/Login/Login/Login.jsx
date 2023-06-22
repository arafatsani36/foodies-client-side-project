import React, { useContext, useState } from 'react';
import { Button, Container , Form} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {

    // const[user, setUser] = useState('');

    const {singIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSingIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)

    
        singIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })


        
    } 

    return (
        <Container className='w-25 mx-auto mt-5 h-100'>
            <Form onSubmit={handleSingIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Button className='mb-3' variant="primary" type="submit">
                Login
            </Button>

                <div className="d-grid gap-2">
                <button className="btn btn-dark" type="button">Gmail Login</button>
                <button className="btn btn-dark" type="button">GitHub Login</button>
                </div>

           <br />

            <Form.Text className="text-muted">
               Don't Have an Account? <Link to='/register'>Register Now</Link>
            </Form.Text>
            </Form>
            
        </Container>
    );
};

export default Login;