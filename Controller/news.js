const axios = require("axios");
const Cheerio = require("cheerio");
const news = require("../config/newstype");

const getNews = async (req, res, next) => {
  let number = req.query.number;
  let reqNews = req.query.type;
  let source = req.query.source;

  let url;
  if (reqNews == "india") {
    url = news.india;
  } else if (reqNews == "entertainment") {
    url = news.entertainment;
  } else if (reqNews == "business") {
    url = news.business;
  } else if (reqNews == "technology") {
    url = news.tech;
  } else if (reqNews == "automobile") {
    url = news.auto;
  } else if (reqNews == "sports") {
    url = news.sports;
  } else if (reqNews == "world") {
    url = news.world;
  } else{
    url = news.india;
  }

  let list = [];
  let j = 1;
  try {
    await Promise.all(
      url.map(async (element) => {
        await axios.get(element.url).then((response) => {
          let html = response.data;
          const $ = Cheerio.load(html);
          $(element.selector, element.context, html).each((i, select) => {
            let obj = {
              id: j++,
              source: element.source,
              image: $(select).find("img").attr("src"),
              heading: $(select).find(element.heading).text().trim(),
              url: $(select).find("a").attr("href"),
            };
            list.push(obj);
          });
        });
      })
    );
      
    if (number !== undefined) {
      let newList = list.slice(0, number);
      return res.send({ success: true, list: newList });
    }

    if(source !== undefined){
        let newList = list.filter(news => news.source == source);
        return res.send({ success: true, list: newList });
    }

    return res.send({ success: true, list: list });

  } catch (error) {
    return res.status(500).json({
      message: error,
      success: false,
    });
  }
};
module.exports = {
  getNews,
};
