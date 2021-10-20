const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

getRepos('https://api.github.com/orgs/tryber/repos').then((d) => {
  console.log(d);
  return d;
});