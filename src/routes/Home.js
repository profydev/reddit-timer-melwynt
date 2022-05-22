import React from 'react';
import { Link } from 'react-router-dom';
import preview from '../images/preview.png';

const Home = () => (
  <main className="main">
    <h1 className="main__title">No reactions to your reddit posts?</h1>
    <p className="main__description">
      Great timing, great results! Find the best time to post on your subreddit.
    </p>
    <div className="main__button">
      <Link to="/search/javascript">Show me the best time</Link>
    </div>
    <div className="main__search">
      <Link to="/search/javascript">r/javascript</Link>
    </div>
    <div className="main__screenshot">
      <Link to="/search/javascript">
        <img src={preview} alt="" />
      </Link>
    </div>

    <div className="main__section">
      <h2 className="main__section__title">How it works</h2>
      <ul className="main__section__list">
        <li className="main__section__list__item">
          We find the 500 top posts from the past year for a subreddit.
        </li>
        <li className="main__section__list__item">
          The data is visualized in a heatmap grouped by weekday and hour of the
          day.
        </li>
        <li className="main__section__list__item">
          See immediately when to submit your reddit post.
        </li>
      </ul>
    </div>

    <div className="main__section about">
      <h2 className="main__section__title">About</h2>
      <p className="main__section__about-description">
        This app was created during a course on
        <a href="https://profy.dev"> profy.dev </a>
        with the goal to implement a
        <br />
        pixel-perfect real-world application with professional workflows and
        tools like Kanban,
        <br />
        ClickUp, Figma, GitHub, pull requests and code reviews.
        <a href="https://profy.dev/employers">
          {' '}
          Click here for more information.
        </a>
      </p>
    </div>
  </main>
);

export default Home;
