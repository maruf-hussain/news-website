import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../image/bg.png'


const RightNav = () => {
    return (
        <div>
            <h3 className='mt-4'>Login With</h3>
            <Button className='mb-2' variant="secondary"><FaGoogle /> Login With Google</Button>{' '}
            <Button variant="success"><FaGithub />  Login With Github</Button>

            <div className='mt-2'>
                <h4 className='mt-4'>Find Us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                   
                </ListGroup>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
            <div>
                <img src={bg} alt=''/>
            </div>
        </div>
    );
};

export default RightNav;