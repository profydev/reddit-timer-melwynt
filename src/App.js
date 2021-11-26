import './index.css';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';
import Header from './routes/Header';
import Footer from './routes/Footer';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
