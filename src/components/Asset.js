import React from 'react';
// import React,{ useState, useEffect } from 'react';
import 'styles/Asset.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dataContext from 'utils/dataContext';

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
    const starsHTML = stars.map((star, index) => {
      return(
        <li key={index}>{star}</li>
      )
    })
    return(
      <>
        <li>{asset.rating}</li>
          {starsHTML}
        <li>({asset.ratingVotes})</li>
      </>
    )
  }
  else{
    return '';
  }
}

const Asset = () => {
  return(
    <dataContext.Consumer>
      {dataObj => {
        const assetData = dataObj.assetData,
              pageSettings  = dataObj.pageSettings;
  
        const assetHTML = assetData && assetData.length > 0 && assetData.map(asset => {
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
                    {description}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <ul className="asset-rating" style={pageSettings.assetRating}>
                    {assetRating(asset)}
                  </ul>
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

      }}
    </dataContext.Consumer>
  )
}

export default Asset;