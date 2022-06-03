import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Search = () => {
  const { subreddit } = useParams();
  const searchRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchRef.current.value}`);
  };

  useEffect(() => {
    if (subreddit === undefined) {
      searchRef.current.value = 'javascript';
      navigate('/search/javascript');
    }
  }, [subreddit, navigate]);

  return (
    <main className="main-search">
      <h2 className="main-search__title">Find the best time for a subreddit</h2>
      <div className="main-search__search">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">
            <div className="main-search__search__label">r /</div>
            <input
              ref={searchRef}
              id="search"
              type="text"
              defaultValue={`${subreddit}`}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    </main>
  );
};

export default Search;
