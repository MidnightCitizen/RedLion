const sleep = require('../lib/sleep');

async function insertDataInGoogleSheet(sheet, dataFromReddit) {
    for(let i=0; i<dataFromReddit.length; i++) {
        try {
          // avoid limit google, wait after x row written
          if ([90, 180, 270].includes(i)) await sleep(process.env.WAITING_TIME);
          await sheet.addRow(dataFromReddit[i]);
        } catch(err) {
          console.log(`An error happened when data inserted in GoogleSheet : ${e}`);
        }
      }

}

module.exports = insertDataInGoogleSheet;