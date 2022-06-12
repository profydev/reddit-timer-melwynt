import React, {
  useEffect, //
  useState,
  useReducer,
  useRef,
} from 'react';
import {
  useParams, //
  useNavigate,
  useLocation,
} from 'react-router-dom';
// import axios from 'axios';
import recursiveCommentFetch from '../helper/reddit';

// const timeout = (delay) => {
//   console.log(`Delay of ${delay} ms...`);
//   return new Promise((res) => setTimeout(res, delay));
// };

const getData = async (word) => {
  console.log(`fetching data... for ${word}`);

  // await timeout(1000);

  // const url = `https://www.reddit.com/r/${word}/top.json?t=year&limit=100`;
  // const response = await axios.get(`${url}`);

  // return response.data;

  return await recursiveCommentFetch(word);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getData':
      return {
        posts: action.data,
      };
    default:
      return state;
  }
};

const Search = () => {
  const { subreddit } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState(subreddit);

  const fetchingRef = useRef(false);

  const [loading, setLoading] = useState(false);

  const initialState = {
    posts: {},
  };
  const [posts, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`, { state: { subreddit: search } });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log('subreddit: ', subreddit);
    console.log('location: ', location);
    console.log('fetchingRef: ', fetchingRef.current);

    const fetchData = async () => {
      setLoading(true);
      const data = await getData(subreddit);
      setLoading(false);
      return data;
    };

    if (fetchingRef.current === false) {
      fetchingRef.current = true;
      fetchData().then((data) => {
        dispatch({
          type: 'getData',
          data,
        });
      });
    }

    if (location.state === null) {
      setSearch(subreddit);
    }

    return () => {
      fetchingRef.current = false;
    };
  }, [subreddit, location]);

  useEffect(() => {
    console.log('posts: ', posts);
  }, [posts]);

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
              onChange={handleChange}
              value={search}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
      {loading && <div id="loading" />}
    </main>
  );
};

export default Search;
