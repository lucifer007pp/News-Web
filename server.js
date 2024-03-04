const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('index.html' , { root : path.join(__dirname)}); // Serve the html file 
})

app.get('/api', async (req, res) => { // Get request at /api 
  console.log(req.query);
  const { q, apiKey, pagesize, pageno } = req.query; // Constracting an object , like req.query.q , req.query.apikey etc . As we acess the parameters 
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&apiKey=${apiKey}&pageSize=${pagesize}&page=${pageno}`; // constract the url
  const response = await axios.get(url); // Acess the api to the hosting period 
  res.json(response.data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})