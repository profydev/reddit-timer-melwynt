import React from 'react';
import { Link } from 'react-router-dom';
import preview from '../images/preview.png';

const Home = () => (
  <main>
    <h1>No reactions to your reddit posts?</h1>
    <p>
      Great timing, great results! Find the best time to post on your subreddit.
    </p>
    <div className="button">
      <Link to="/search/javascript">Show me the best time</Link>
    </div>
    <div className="search">
      <Link to="/search/javascript">r/javascript</Link>
    </div>
    <div className="screenshot">
      <Link to="/search/javascript">
        <img src={preview} alt="" />
      </Link>
    </div>
  </main>
);

export default Home;
