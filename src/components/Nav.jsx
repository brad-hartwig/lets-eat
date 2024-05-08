import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '/src/scss/Nav.sass';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from '/src/data/images.js';

const Nav = () => {
  const [activeNavBtn, setActiveNavBtn] = useState(sessionStorage.getItem('activeNavBtn'));

  // useEffect is used as a callback to setActiveNavBtn
  useEffect(() => {}, [activeNavBtn]);

  const btnHandler = index => {
    sessionStorage.setItem('activeNavBtn', index);
    setActiveNavBtn(index);
  };

  const meals = ['breakfast', 'lunch', 'dinner', 'snack'];

  return (
    <Container>
      <Row className='meals mb-4'>
        {meals.map((name, index) => {
          return (
            <Col key={index}>
              <Link to='/recipes' state={{ keyword: name }}>
                <img
                  id={'nav-btn-' + index}
                  src={Images[name]}
                  key={index}
                  className={index == activeNavBtn ? 'active' : ''}
                  onClick={() => {
                    btnHandler(index);
                  }}
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Nav;
