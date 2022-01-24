const axios = require('axios')
const Cheerio = require('cheerio')
const news = require('../config/newstype')


const getNews = async(req, res, next) => {
    
    let reqNews = req.body.type
    let url;
    if (reqNews == "India") {
        url = news.india
    } else if (reqNews == "Entertainment") {
        url = news.entertainment
    } else if (reqNews == "Business") {
        url = news.business
    } else if (reqNews == "Technology") {
        url = news.tech
    } else if (reqNews == "Automobile") {
        url = news.auto
    } else if (reqNews == "Sports") {
        url = news.sports
    } else if (reqNews == "World") {
        url = news.world
    }


    let list = []
    let j=1;
    try {
        await Promise.all(url.map(async (element) => {

            await axios.get(element.url)
                .then((response) => {
                    let html = response.data
                    const $ = Cheerio.load(html)
                    $(element.selector, element.context, html).each((i, select) => {
                        let obj = {
                            id: j++,
                            image: $(select).find('img').attr('src'),
                            heading: $(select).find(element.heading).text().trim(),
                            url: $(select).find('a').attr('href')
                        }
                        list.push(obj)
                    })

                })
        }))

        res.send({ success: true, list: list })
    } catch (error) {
        res.staus(500).json({
            message: error,
            success: false
        })
    }


}
module.exports = {
    getNews
}