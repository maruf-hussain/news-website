


import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviders';





const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [succes, setSucces] = useState('');
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSucces('Your Sign Up Succesfully')
                setError('');
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })


    }
    const handleTerms = (event) =>{
        setAccepted(event.target.checked)
    }

    return (

        <Container className='w-25 mt-4 bg-dark text-white p-4 rounded-2'>
            <h1>Please Sign Up</h1>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter Photo Url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleTerms}
                    type="checkbox" 
                    name="accept"
                 label={<>Accept <Link to="/terms">Terms and Condition</Link></>} />
                </Form.Group>

                <Button disabled={!accepted} variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Text className="text-light">
                    <p>All Ready Have An Account Please <Link className='text-warning' to="/login">Login</Link></p>
                </Form.Text>

                <Form.Text className="text-succes">
                    {succes}
                </Form.Text>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default SignUp;