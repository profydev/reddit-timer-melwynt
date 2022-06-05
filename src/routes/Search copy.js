import React, { useEffect, useReducer } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

// import axios from 'axios';

const timeout = (delay) => {
  console.log(`Delay of ${delay} ms...`);
  return new Promise((res) => setTimeout(res, delay));
};

const getData = async (word) => {
  console.log(`fetching data... for ${word}`);

  await timeout(2000);

  // const url = `https://www.reddit.com/r/${word}/top.json?t=2022&limit=100`;
  // const data = await axios.get(`${url}`);
  const data = 'test';
  return data;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getPosts':
      console.log(`data getPosts: ${action.data}`);
      return {
        ...state,
        posts: action.data,
      };
    case 'setSearch':
      if (action.refresh && state.searchFlag) {
        console.log(`data setSearch: ${action.data}`);
        return {
          ...state,
          search: action.search,
          posts: action.data,
        };
      }
      return {
        ...state,
        search: action.search,
      };
    case 'searchFlag':
      return {
        ...state,
        searchFlag: action.searchFlag,
      };
    default:
      return state;
  }
};

const Search = () => {
  const { subreddit } = useParams();
  // const location = useLocation();
  const navigate = useNavigate();

  const initialState = {
    search: subreddit || 'javascript',
    posts: {},
    searchFlag: true,
  };
  const [posts, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/search/${posts.search}`);

    const fetchData = async () => {
      const data = await getData(posts.search);
      return data;
    };

    await fetchData().then((data) => {
      dispatch({ type: 'searchFlag', searchFlag: false });
      dispatch({ type: 'getPosts', data });
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({ type: 'setSearch', search: e.target.value, refresh: false });
  };

  useEffect(() => {
    let active = true;

    console.log('subreddit: ', subreddit);
    // console.log('location: ', location);

    const fetchData = async () => {
      const data = await getData(subreddit);
      return data;
    };

    console.log('searchFlag: ', posts.searchFlag);

    if (posts.searchFlag) {
      console.log('useEffect fetchData...');

      if (active) {
        fetchData().then((data) => {
          dispatch({
            type: 'setSearch',
            search: subreddit,
            data,
            refresh: true,
          });
        });
      }
    }

    return () => {
      if (active) {
        dispatch({ type: 'searchFlag', searchFlag: true });
        active = false;
      }
    };
    // }, [subreddit, location, posts.searchFlag]);
  }, [subreddit, posts.searchFlag]);

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
              value={posts.search}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
      <div>{posts.search}</div>
    </main>
  );
};

export default Search;
