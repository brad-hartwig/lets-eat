import React from 'react';
import { useContext } from 'react';
import dataContext from '/src/utils/dataContext';
import '/src/scss/Asset.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Images from '/src/data/images.js';
import { useState } from 'react';
import AssetModal from './AssetModal';

const assetRating = (asset, footerDisplay) => {
  if (asset.rating > 0) {
    const ratingSplit = asset.rating.toString().split('.');
    let stars = [],
      i = 1,
      total = 0;
    // full stars
    while (i <= ratingSplit[0]) {
      stars.push(<FontAwesomeIcon icon={fas.faStar} key={total} />);
      i++;
      total++;
    }
    // half star
    if (ratingSplit[1] > 0) {
      stars.push(<FontAwesomeIcon icon={fas.faStarHalfStroke} key={total} />);
      total++;
    }
    // empty stars
    while (total < 5) {
      stars.push(<FontAwesomeIcon icon={fas.faStar} key={total} />);
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
  const [showModal, setShowModal] = useState(false);
  const [assetUUID, setAssetUUID] = useState('default-asset');

  const { assetData, specialsData, pageSettings, keywordObj } = useContext(dataContext);

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

      // pass the keywordObj as a state in Link tag or from a keyword search
      if (asset.category.includes(keywordObj.keyword) && uuid != 'default-asset') {
        return (
          <Col className='mb-4' xs={6} sm={6} md={4} lg={3} xl={3} xxl={2} key={uuid}>
            <Card
              className='h-100'
              data-uuid={uuid}
              onClick={() => {
                {
                  setAssetUUID(uuid);
                }
                setShowModal(true);
              }}
            >
              <Card.Img variant='top' src={Images[small]} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              {assetRating(asset, pageSettings.footerDisplay)}
            </Card>
          </Col>
        );
      }
    });

  return (
    <React.Fragment key={'asset-' + assetUUID}>
      {assetHTML}
      <dataContext.Provider value={{ assetData, specialsData, showModal, setShowModal, assetUUID }}>
        <AssetModal uuid={assetUUID} show={showModal} />
      </dataContext.Provider>
    </React.Fragment>
  );
};

export default Asset;
