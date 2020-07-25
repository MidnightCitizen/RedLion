const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

const sleep = require('./lib/sleep');
const retrieveDataFromReddit = require('./functions/retrieveDataFromReddit');
const getDataFromGoogleSheet = require('./functions/getDataFromGoogleSheet');
const deleteRows = require('./functions/deleteRows');
const insertDataInGoogleSheet = require('./functions/insertDataInGoogleSheet');
const colorHeader = require('./functions/colorHeader');
const colorVerification = require('./functions/colorVerification');
const colorSellers = require('./functions/colorSellers');
const createBorders = require('./functions/createBorders');
const updateLastLaunchDate = require('./functions/updateLastLaunchDate');



const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

const main = async function main() {
       console.log('Launching the process');
       // loading credentials and document
       await doc.useServiceAccountAuth({
              client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
              private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
       });
       await doc.loadInfo(); // loads document properties and worksheets
    
       // getting data from second google sheet
       const sheet1 = doc.sheetsByIndex[1];
       const reddits = await sheet1.getRows();
       const dataFromGoogleSheet = getDataFromGoogleSheet(reddits);
       
       // request to reddit for data 
       const dataFromReddit = await retrieveDataFromReddit(dataFromGoogleSheet);
       
       // clean up google sheet
       const sheet0 = doc.sheetsByIndex[0];
       const sheetRows = await sheet0.getRows();
       await deleteRows(sheetRows);
       await sleep(process.env.WAITING_TIME);
       
       // insert new data
       await insertDataInGoogleSheet(sheet0, dataFromReddit);
      
       await sleep(20000);
       // prepare cells for style 
       await sheet0.loadCells(`A1:G${dataFromReddit.length +1}`);

       // style
       colorHeader(sheet0);
       colorVerification(sheet0, dataFromReddit.length);
       colorSellers(sheet0, dataFromReddit.length);
       createBorders(sheet0, dataFromReddit.length);
      
       // update
       await sheet0.saveUpdatedCells();

       // update time last launch date
       updateLastLaunchDate(sheet1);

       console.log('Ending the process');
       return;

}

main();
//setInterval(main, process.env.LAUNCH_EACH_X_MILLISECONDS);









