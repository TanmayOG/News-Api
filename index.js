const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/news', async (req, res) => {
  try {
    const newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=2c5c87ed1d9f4633bd35459e8c501990';
    const response = await axios.get(newsApiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

