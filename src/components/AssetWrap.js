import React from 'react';
import 'styles/AssetWrap.sass';
import Asset from 'components/Asset';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const AssetWrap = () => {
  return (
    <Container className='mt-5' style={{marginBottom: '4.5rem'}}>
      <Row>
        <Asset />
      </Row>
    </Container>
  );
};

export default AssetWrap;
