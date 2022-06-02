import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Search = () => {
  const { subreddit } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (subreddit === undefined) {
      navigate('/search/javascript');
    }
  }, [subreddit, navigate]);

  return (
    <main>
      <h2>
        r/
        {`${subreddit}`}
      </h2>
    </main>
  );
};

export default Search;
