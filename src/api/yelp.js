import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer qEQfQAT8wFs1LAgByJFrohI5JOkDgVAaQK36wgTnVim_0aqJm50a_0eUvG-bZxYxVnRymtdMw6jf1kO2LZdE-thlMTdUa4Hq5lnzoOON7rsgLFlbQK08wED2VUHWXnYx'
    }
});