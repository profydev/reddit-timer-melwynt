import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Search from './routes/search';

const rootElement = document.getElementById('root');
// eslint-disable-next-line react/jsx-filename-extension
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search" element={<Search />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
