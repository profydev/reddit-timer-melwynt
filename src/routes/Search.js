import React, { useEffect, useReducer } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

const getData = async (word) => {
  console.log('fetching data...');

  const url = `https://www.reddit.com/r/${word}/top.json?t=2022&limit=100`;
  const data = await axios.get(`${url}`);
  return data;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'getPosts':
      console.log(`data getPosts: ${action.data}`);
      return {
        ...state,
        posts: action.data,
        searchFlag: action.searchFlag,
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
        searchFlag: true,
      };
    default:
      return state;
  }
};

const Search = () => {
  const { subreddit } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const initialState = {
    search: subreddit || 'javascript',
    posts: {},
    searchFlag: true,
  };
  const [posts, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${posts.search}`);

    const fetchData = async () => {
      const data = await getData(posts.search);
      return data;
    };

    fetchData().then((data) => {
      dispatch({ type: 'getPosts', data, searchFlag: false });
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    dispatch({ type: 'setSearch', search: e.target.value, refresh: false });
  };

  useEffect(() => {
    console.log('subreddit: ', subreddit);
    console.log('location: ', location);

    const fetchData = async () => {
      const data = await getData(subreddit);
      return data;
    };

    if (posts.searchFlag) {
      fetchData().then((data) => {
        dispatch({
          type: 'setSearch',
          search: subreddit,
          data,
          refresh: true,
        });
      });
    }

    return () => {
      dispatch({ type: 'searchFlag', searchFlag: true });
    };
  }, [subreddit, location, posts.searchFlag]);

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
