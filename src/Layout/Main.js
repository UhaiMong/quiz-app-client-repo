import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3" className="d-none d-lg-block">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg="9">
                        <Outlet>
                        </Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;