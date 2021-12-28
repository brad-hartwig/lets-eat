import React from 'react';
import Header from 'components/Header';
import AssetWrap from 'components/AssetWrap';
import Footer from 'components/Footer';
import assetData from 'data/recipes.json';
import settings from 'data/settings.json';
import dataContext from 'utils/dataContext';

const globalSettings = settings.Global,
  pageSettings = settings.Recipes;

const Recipes = () => {
  return (
    <dataContext.Provider value={{ assetData, pageSettings, globalSettings }}>
      <Header />
      <AssetWrap />
      <Footer />
    </dataContext.Provider>
  );
};

export default Recipes;
