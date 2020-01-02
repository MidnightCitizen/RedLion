const fastcsv = require('fast-csv');
const fs = require('fs');
const request = require("request");
const getInfoReddit = require('./lib/getInfoReddit');
const getDate = require('./lib/getDate');

const now = getDate();
const data = [];

let listReddit;

const getData = async function getData() {
  
    for (const element of JSON.parse(listReddit)) {
        const result = await getInfoReddit(request, element, now);
        data.push(result);
    };
   
    data.sort((a, b) => parseFloat(b.Members) - parseFloat(a.Members));
    const ws = fs.createWriteStream(`${now}_reddit_data.csv`);
    fastcsv.write(data, { headers: true }).pipe(ws);
    console.log('Done');
};


try {
    if (fs.existsSync(`${__dirname}/subreddits.json`)) {
        console.log('File found');
        fs.readFile(`${__dirname}/subreddits.json`, 'utf-8', (error, data) => {
            if (error) throw error;
            listReddit = data;
            getData();
      });
    } else {
        console.log('No file found, default json used');
    listReddit = require('./subreddits.json');
    getData();
    }
  } catch(err) {
    console.error(err)
  }










