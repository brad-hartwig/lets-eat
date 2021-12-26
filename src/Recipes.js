import React from 'react';
import AssetWrap from './AssetWrap';
import settings from './settings';
import settingsContext from './settingsContext';

const Recipes = () => {
  return(
    <settingsContext.Provider value={settings.Recipes}>
      <AssetWrap />
    </settingsContext.Provider>
  )
}

export default Recipes;