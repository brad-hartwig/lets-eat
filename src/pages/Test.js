import React from 'react';
import { Link } from "react-router-dom";
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'data/images.js';

const Test = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className='meals mb-4'>
          <Col>
          Test page
          <Link to="/recipes"><img src={Images.breakfast} /></Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Test;
