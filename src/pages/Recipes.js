import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/Header';
import AssetWrap from 'components/AssetWrap';
import Footer from 'components/Footer';
import assetData from 'data/recipes.json';
import settings from 'data/settings.json';
import dataContext from 'utils/dataContext';

const globalSettings = settings.Global,
  pageSettings = settings.Recipes;

const Recipes = () => {
  // pass the keywordObj as a state in Link tag or from a keyword search
  const location = useLocation();
  const keywordObj = location.state;
  return (
    <dataContext.Provider value={{ assetData, pageSettings, globalSettings, keywordObj }}>
      <Header />
      <AssetWrap />
      <Footer />
    </dataContext.Provider>
  );
};

export default Recipes;
