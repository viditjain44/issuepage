const axios = require('axios');

// Replace these values with your own GitHub username, repository, and personal access token
const username = 'gitlabhq';
const repository = 'gitlabhq';

const token = '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';

const apiUrl = `https://api.github.com/repos/${username}/${repository}/issues`;

const config = {
  headers: {
    Authorization: `token ${token}`,
  },
};

axios
  .get(apiUrl, config)
  .then((response) => {
    // Handle the response data here
    const issues = response.data;
    console.log(issues);
  })
  .catch((error) => {
    console.error('Error fetching issues:', error);
  });
