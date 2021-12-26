import React,{ useState, useEffect } from 'react';
import './Asset.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import settings from './settings';

const assetRating = asset => {
  if (asset.rating > 0){
    const ratingSplit = asset.rating.toString().split('.');
    let stars = [],
        i     = 1,
        total = 0;
    // full stars
    while (i <= ratingSplit[0]){
      stars.push(<FontAwesomeIcon icon={['fas', 'star']} key={total} />);
      i++;
      total++;
    }
    // half star
    if (ratingSplit[1] > 0){
      stars.push(<FontAwesomeIcon icon={['fas', 'star-half-alt']} key={total} />);
      total++;
    }
    // empty stars
    while (total < 5){
      stars.push(<FontAwesomeIcon icon={['far', 'star']} key={total} />);
      total++;
    }
    return(
      <>
        {asset.rating}<div className="stars-group" key={total + "-stars-group"}>{stars}</div> ({asset.ratingVotes})
      </>
    );
  }
  else{
    return '';
  }
}

const Asset = () => {
  let [assetData, setAssetData] = useState([]);
  const getAssetData = () => {
    fetch(settings.jsonPath)
      .then(resp => {
        return resp.json();
      })
      .then(myJson => {
        setAssetData(myJson);
      })
      .catch(error => {
        console.log(error)
      });
  }
  useEffect(() => {
    getAssetData();
  },[]) 

  const assetHTML = assetData.map(asset => {
    const {uuid, images:{small}, title, description} = asset;
    return(
      <div key={uuid} className="col mb-5 card-wrap" data-uuid={uuid}>
        <div className="card h-100">
          <div className="card-img-wrap">
            <img className="card-img-top" src={small} alt="..." />
          </div>
            <div className="card-body p-4">
              <div className="">
                <h5 className="fw-bolder">{title}</h5>
                {description}<br/>
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="asset-rating" style={settings.assetRating}>{assetRating(asset)}</div>
          </div>
        </div>
      </div>
    )
  })

  return(
    <>
      {assetHTML}
    </>
  );

}

export default Asset;