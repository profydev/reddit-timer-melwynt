import './index.css';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';
import Header from './routes/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/javascript" element={<Search />} />
    </Routes>
  </Router>
);

export default App;
