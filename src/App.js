import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const App = () => (
  <div>
    <h1>App placeholder</h1>
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/search">Search</Link>
    </nav>
  </div>
);

export default App;
