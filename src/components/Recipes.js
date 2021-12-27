import React from 'react';
import AssetWrap from 'components/AssetWrap';
import assetData from 'data/recipes.json';
import settings from 'data/settings.json';
import dataContext from 'utils/dataContext';

const globalSettings = settings.Global,
      pageSettings = settings.Recipes

const Recipes = () => {
  return(
    <dataContext.Provider value={{ assetData, pageSettings, globalSettings }}>
      <AssetWrap />
    </dataContext.Provider>
  )
}

export default Recipes;