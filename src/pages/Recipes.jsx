import dataContext from '/src/utils/dataContext.js';
import { useLocation } from 'react-router-dom';
import Header from '/src/components/Header.jsx';
import Nav from '/src/components/Nav.jsx';
import AssetWrap from '/src/components/AssetWrap.jsx';
import Footer from '/src/components/Footer.jsx';
import assetData from '/src/data/recipes.json';
import specialsData from '/src/data/specials.json';
import settings from '/src/data/settings.json';

const globalSettings = settings.Global,
  pageSettings = settings.Recipes;

const Recipes = () => {
  // pass the keywordObj as a state in Link tag or from a keyword search
  const location = useLocation();

  const keywordObj = location.state;

  return (
    <>
      <dataContext.Provider value={{ assetData, specialsData, pageSettings, globalSettings, keywordObj }}>
        <Header />
        <Nav />
        <AssetWrap />
        <Footer />
      </dataContext.Provider>
    </>
  );
};

export default Recipes;
