import { Link } from 'react-router-dom';
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from '/src/data/images.js';

const Test = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className='meals mb-4'>
          <Col>
            Test page
            <Link to='/recipes'>
              <img src={Images.breakfast} />
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Test;
