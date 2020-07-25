const getInfoReddit = require('./getInfoReddit');
const request = require("request");

const retrieveDataFromReddit = async function retrieveDataFromReddit(listReddit) {
    try {
      const dataReddit = [];
      for (const element of listReddit) {
          const result = await getInfoReddit(request, element);
          if (result.Members > 0 && result.Accounts_Online >= 0)  dataReddit.push(result);
      };
     
      dataReddit.sort((a, b) => parseFloat(b.Members) - parseFloat(a.Members));
      return dataReddit; 
    } catch(err) {
      console.log(`Error when fetching for data from Redditt : ${err}`);    
  }
};

module.exports = retrieveDataFromReddit;