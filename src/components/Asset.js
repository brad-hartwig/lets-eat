import React from 'react';
import 'styles/Asset.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dataContext from 'utils/dataContext';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const assetRating = (asset, footerDisplay) => {
  if (asset.rating > 0) {
    const ratingSplit = asset.rating.toString().split('.');
    let stars = [],
      i = 1,
      total = 0;
    // full stars
    while (i <= ratingSplit[0]) {
      stars.push(<FontAwesomeIcon icon={['fas', 'star']} key={total} />);
      i++;
      total++;
    }
    // half star
    if (ratingSplit[1] > 0) {
      stars.push(<FontAwesomeIcon icon={['fas', 'star-half-alt']} key={total} />);
      total++;
    }
    // empty stars
    while (total < 5) {
      stars.push(<FontAwesomeIcon icon={['far', 'star']} key={total} />);
      total++;
    }
    const starsHTML = stars.map((star, index) => {
      return <li key={index}>{star}</li>;
    });
    return (
      <Card.Footer style={footerDisplay}>
        <ul className='asset-rating'>
          <li>{asset.rating}</li>
          {starsHTML}
          <li>({asset.ratingVotes})</li>
        </ul>
      </Card.Footer>
    );
  } else {
    return '';
  }
};

const Asset = () => {
  return (
    <dataContext.Consumer>
      {dataObj => {
        const assetData = dataObj.assetData,
          pageSettings = dataObj.pageSettings;

        const assetHTML =
          assetData &&
          assetData.length > 0 &&
          assetData.map(asset => {
            const {
              uuid,
              images: { small },
              title,
              description,
            } = asset;
            return (
              <Col className='pb-3' xs={4} sm={6} md={4} lg={3} xl={3} xxl={2} key={uuid}>
                <Card className='h-100' data-uuid={uuid}>
                  <Card.Img variant='top' src={small} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                  {assetRating(asset, pageSettings.footerDisplay)}
                </Card>
              </Col>
            );
          });

        return <>{assetHTML}</>;
      }}
    </dataContext.Consumer>
  );
};

export default Asset;
