import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {
    const [error , setError] = useState('');

    const {createUser} = useContext(AuthContext);


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
         console.log(name, photo, email, password)
        
         if(password.length < 6){
            setError('Password most be 6 characters or longer');
            return;
        }

        createUser(email, password)
        .then(result => {
            const createUser = result.user;
            console.log(createUser);
        })
        .catch(error => {
            console.log(error)
        })

         
    }

    return (
        

        <Container className='w-25 mx-auto mt-5'>
        <Form onSubmit={handleRegister}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Your Name" required/>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Enter Your Photo Url" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter Your Email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter Your Password" required/>
        </Form.Group>
        
        <Button className='mb-2' variant="primary" type="submit">
            Register
        </Button>

       <br />

        <Form.Text className="text-muted ">
           Already Have an Account? <Link to='/login'>Login Now</Link>
        </Form.Text>
        <br />
       
          <p className='text-danger mt-3'>{error}</p>
       
        </Form>
    </Container>
    );
};

export default Register;