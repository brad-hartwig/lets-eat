import React from 'react';
import AssetWrap from './AssetWrap';
import AssetContext from './AssetContext';
// import { AssetContext, settings } from './AssetContext';
// import { settings } from './settings';
// const AssetContext = React.createContext({});

const Recipes = () => {
  const settings = {
    jsonPath: './recipes.json',
    assetRating: {display: 'block'}
  }
  return(
    <AssetContext.Provider value={settings}>
      <AssetWrap />
    </AssetContext.Provider>
  )
}

export default Recipes;