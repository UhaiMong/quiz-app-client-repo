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
                    <Col lg="2" className="d-none d-lg-block">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg="10">
                        <Outlet>
                            <h1>Main content</h1>
                        </Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;