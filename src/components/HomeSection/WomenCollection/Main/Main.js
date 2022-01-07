import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import img from '../../../../image/banner2.jpg'
import {
    Outlet,
    Link, Routes, Route
  } from "react-router-dom";
import Clothing from '../Clothing/Clothing';
import HandBag from '../HandBag/HandBag';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img src={img} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h1>For Women's Collection</h1>
                       <Row>
                       <nav>
                        <Link to="cloth">Invoices</Link> |{" "}
                        <Link to="handbag">Expenses</Link>
                        </nav>
                        <Outlet />
      <Routes>
           <Route path="cloth" element={<Clothing />} />
           <Route path="handbag" element={<HandBag />} />
      </Routes>
                        </Row> 
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
};

export default Main;