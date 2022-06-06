import fetch from 'node-fetch';

const user = 'hugo__df';
const makeRedditCommentUrl = (user, queryParams) => {
  const url = `https://www.reddit.com/user/${user}/comments.json?${Object.entries(
    queryParams
  )
    .filter(([k, v]) => Boolean(v))
    .map(([k, v]) => `${k}=${v}`)
    .join('&')}`;

  console.log(url);
  return url;
};

const recursiveCommentFetch = async (
  user,
  data = [],
  { after, limit = 100 } = {},
  step = 0
) => {
  console.log('step:', step);
  step += 1;

  const url = makeRedditCommentUrl(user, { after, limit });

  console.log('fetch(url)');
  const res = await fetch(url);

  console.log('json()');
  const res_1 = await res.json();

  const { after: after_1, children } = res_1.data;

  const newData = [...data, ...children];

  if (step === 4) {
    return newData;
  }

  if (after_1) {
    console.log('Entering recursion');
    // recursive case, there's a way to fetch more comments
    return recursiveCommentFetch(user, newData, { after }, step);
  }
  return newData;
};

recursiveCommentFetch(user).then((comments) => console.log(comments));
