// import React from 'react';
import '/src/scss/AssetWrap.sass';
import Asset from './Asset';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const AssetWrap = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Asset />
      </Row>
    </Container>
  );
};

export default AssetWrap;
