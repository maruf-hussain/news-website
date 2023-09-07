import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviders';


const Login = () => {
  const [succes ,setSucces] = useState('');
  const [error ,setError] = useState('');

  const {logIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/category/0'

const handleLogin = event => {
  event.preventDefault();
  setSucces('');
        const form = event.target;
        const email = form.email.value
        const password = form.password.value

        console.log( email, password);

        logIn(email, password)
        .then(result =>{
          const LoggedUser = result.user;
          console.log(LoggedUser);
          setSucces('Your Loggin Succesfully')
          setError('');
          navigate(from, {replace: true})
        })
        .catch(error =>{
          console.log(error.message)
          setError(error.message)
        })
};
    return (
        <div>
            <Header></Header>
            <Container className='w-25 mt-2 text-white bg-dark p-4 rounded-2'>
                <h1>Please Login</h1>
                <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-light">
       <p>Don't Have an Account Plese <Link className='text-danger' to="/signup">Sign Up</Link></p> 
        </Form.Text>
      <Form.Text className="text-succes">
         {succes}
        </Form.Text>
        <Form.Text className="text-danger">
         {error}
        </Form.Text>
    </Form>
            </Container>
        </div>
    );
};

export default Login;