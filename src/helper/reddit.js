import axios from 'axios';

const makeRedditCommentUrl = (word, queryParams) => {
  const url = `https://www.reddit.com/r/${word}/top.json?${Object.entries(
    //
    queryParams,
  )
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => `${k}=${v}`)
    .join('&')}`;

  return url;
};

const recursiveCommentFetch = async (
  word,
  data = [],
  { after, t = 'year', limit = 100 } = {},
  step = 1,
) => {
  // after param needs to be last in the url
  const url = makeRedditCommentUrl(word, { t, limit, after });

  const res = await axios(url);

  const { after: afterItem, children } = await res.data.data;

  const newData = [...data, ...children];

  if (step === 5) {
    return newData;
  }

  if (afterItem) {
    return recursiveCommentFetch(word, newData, { after: afterItem }, step + 1);
  }
  return newData;
};

export default recursiveCommentFetch;
