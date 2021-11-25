import './index.css';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Search';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Router>
);

export default App;
