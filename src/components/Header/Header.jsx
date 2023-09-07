import React, { useContext } from 'react';
import logo from '../../image/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviders';



const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then()
    .catch(console.log('log out succes'))
  }
  
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} />
                <p className='text-secondary'>Journalist with Fair and Favour</p>
                <p> {moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary text-light'>
                <Button variant="danger">Latest</Button>
                <Marquee className='' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto ">
            <Link to="/category/0" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/" >Featcher</Link>

           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav eventKey={2} href="#memes">
              {user ?    <Link to="/login"><Button onClick={handleLogout} variant="dark">Log Out</Button></Link>
              :       <Link to="/login"><Button variant="dark">Sign In</Button></Link>

            }
           

            

            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Container>
    );
};

export default Header;