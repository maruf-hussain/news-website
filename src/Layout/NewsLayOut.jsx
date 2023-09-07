import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNav from '../components/Shared/LeftNav/LeftNav';
import Header from '../components/Header/Header';
import RightNav from '../components/Shared/RightNav/RightNav';
import Footer from '../components/Footer/Footer';



const NewsLayOut = () => {
    return (
        <div>
             <Header></Header>
            <Container>
                <Row>
                    
                    <Col lg={9}>
                       <Outlet></Outlet> 
                    </Col>
                    
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayOut;