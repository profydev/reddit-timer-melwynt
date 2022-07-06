/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({ selectedPosts }) => {
  const shortenTitle = (title) => {
    const titleLength = title.length;
    let newTitle = title;

    if (titleLength > 45) {
      newTitle = title.substring(0, 45);
      newTitle += '…';
    }
    console.log('Title length:', newTitle.length);
    return newTitle;
  };
  // The new Babel release gives support for ECMAs…

  return (
    <div className="posts">
      <h1 className="posts__title">Posts</h1>
      <table className="posts__table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Time Posted</td>
            <td>Score</td>
            <td>Comments</td>
            <td>Author</td>
          </tr>
        </thead>
        <tbody>
          {selectedPosts.length !== 0 ? (
            selectedPosts.map((post) => (
              <tr key={post.id}>
                <td>
                  <a href={post.url}>{shortenTitle(post.title)}</a>
                </td>
                <td>{post.timePosted}</td>
                <td>{post.score}</td>
                <td>{post.num_comments}</td>
                <td>{post.author}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

Posts.propTypes = {
  selectedPosts: PropTypes.instanceOf(Array),
};

Posts.defaultProps = {
  selectedPosts: [],
};

export default Posts;
