import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'pages/Home';
import Recipes from 'pages/Recipes';
import Test from 'pages/Test';
import 'styles/index.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    <Route index path="/lets-eat" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="test" element={<Test />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);




// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
