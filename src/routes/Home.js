import React from 'react';
import preview from '../images/preview.png';

const Home = () => (
  <main>
    <h1>No reactions to your reddit posts?</h1>
    <p>
      Great timing, great results! Find the best time to post on your subreddit.
    </p>
    <div className="button">
      <a href="/">Show me the best time</a>
    </div>
    <div className="search">
      <a href="https://www.reddit.com/r/javascript/">r/javascript</a>
    </div>
    <div className="screenshot">
      <img src={preview} alt="" />
    </div>
  </main>
);

export default Home;
