const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

// WEB SCRAPING
const url = "https://www.ufc.com/rankings";

app.get("/", (req, res) => {
  res.json("This is my webscraper");
});

app.get("/results", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      //console.log(html);
      const $ = cheerio.load(html);
      let fighters = [];
      $(".views-row", html).each(function () {
        const data = $(this).text();
        fighters.push(data.trim());
        //console.log(data);
      });
      res.json(fighters);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
