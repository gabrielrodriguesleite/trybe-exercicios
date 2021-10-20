const fetch = require('node-fetch');
const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// seus testes aki

test('teste getRepos contém os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', async () => {
  const repos = await getRepos('https://api.github.com/orgs/tryber/repos').then((d) => d);
  const a ='sd-01-week4-5-project-todo-list';
  const b = 'sd-01-week4-5-project-meme-generator';
  console.log(repos);
  expect(repos.includes(a)).toBeTruthy();
  expect(repos.includes(b)).toBeTruthy();
})