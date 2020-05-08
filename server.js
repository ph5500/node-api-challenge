const express = require('express');

//need to add actionRouter 
const actionRouter = require('./data/helpers/actionRouter');
//need to add projectRouter
const projectRouter = require('./data/helpers/projectRouter');

const server = express();

server.use(express.json());

server.use('/api/actions', logger, actionRouter);
server.use('/api/projects', logger, projectRouter)

server.get('/', logger, (req, res) => {
    res.send(`<h2>Say Hello to my API</h2>`)
})

function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl}`);
    next();
}

module.exports = server;