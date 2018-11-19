const express = require('express');
const { PORT } = require('../config');
const redisClient = require('./redis-client');

const app = express();

app.get('/store/:key', async (req, res) => {
    const { key } = req.param
    const value = req.query
    
    await redisClient.setAsync(key, JSON.stringify(value))

    return res.send('yupiii')
})

app.get('/:key', async (req, res) => {
    const { key } = req.param
    const rawData = await redisClient.getAsync(key)

    return res.json(JSON.parse(rawData))
})

app.get('/', (req, res) => {
    return res.send('Hi mate')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}, http://localhost:${PORT}`)
})
