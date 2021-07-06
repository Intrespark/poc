const scrape = require('website-scraper');

let options = {
    urls: ['https://www.morningbrew.com/daily/issues/2021/07/03?email=jzscuba@gmail.com'],
    directory: './node-homepage',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
