const express = require('express')
const { getNews } = require('../Controller/news')

const Router = express.Router()

Router.get("/get/:number",getNews)

module.exports = Router