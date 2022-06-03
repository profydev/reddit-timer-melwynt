import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Search = () => {
  const { subreddit } = useParams();
  const [search, setSearch] = useState(subreddit);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch(subreddit);
  }, [subreddit]);

  return (
    <main className="main-search">
      <h2 className="main-search__title">Find the best time for a subreddit</h2>
      <div className="main-search__search">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">
            <div className="main-search__search__label">r /</div>
            <input
              id="search"
              type="text"
              value={search}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    </main>
  );
};

export default Search;
