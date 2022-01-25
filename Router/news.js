const express = require('express')
const { getNews } = require('../Controller/news')

const Router = express.Router()

Router.get("/get",getNews)

module.exports = Router