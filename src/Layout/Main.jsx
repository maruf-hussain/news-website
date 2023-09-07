import React from 'react';
import Header from '../components/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNav from '../components/Shared/LeftNav/LeftNav';
import RightNav from '../components/Shared/RightNav/RightNav';



const Main = () => {
    return (
        <div>
            <Header></Header>
           
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;