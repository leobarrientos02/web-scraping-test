# web-scraping-test
This is an example of web scraping using JavaScript and Node.js. The web app uses Express, Cheerio, and Axios to scrape data of a website, specifically  https://www.ufc.com/rankings. You can edit the backend to use the specific website you want to use and use cheerio to target the specific content you are looking to scrape.

## Change the Website
Change this line: const url = "https://www.ufc.com/rankings", to the desired website.

## Get the specific content
It is important for you to add the specific section you want to scrape, you must edit this code to your need.

       let fighters = [];
      $(".views-row", html).each(function () {
        const data = $(this).text();
        fighters.push(data.trim());
        //console.log(data);
      });
      res.json(fighters);
 
 **I enjoy using arrays for this process in order to sort all the data being scraped.
 
 The most important part to change is the ".views-row" for which the site i was using was using the class name. You must inspect your website and add the identifier you want to scrape.
 
 **Use the cheerio documentation to better understand how to scrape the data.
 https://www.npmjs.com/package/cheerio
 
