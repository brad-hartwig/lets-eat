import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/Home.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from 'data/images.js';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className='meals mb-4'>
          <Col>
            <Link to='/recipes' state={{ keyword: 'breakfast' }}>
              <img src={Images.breakfast} />
            </Link>
          </Col>
          <Col>
            <Link to='/recipes' state={{ keyword: 'lunch' }}>
              <img src={Images.lunch} />
            </Link>
          </Col>
          <Col>
            <Link to='/recipes' state={{ keyword: 'dinner' }}>
              <img src={Images.dinner} />
            </Link>
          </Col>
          <Col>
            <Link to='/recipes' state={{ keyword: 'snack' }}>
              <img src={Images.snack} />
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
