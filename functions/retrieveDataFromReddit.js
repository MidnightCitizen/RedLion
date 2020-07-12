const getInfoReddit = require('./getInfoReddit');
const request = require("request");

const retrieveDataFromReddit = async function retrieveDataFromReddit(listReddit) {
    try {
      const dataReddit = [];
      for (const element of listReddit) {
          const result = await getInfoReddit(request, element);
          dataReddit.push(result);
      };
     
      dataReddit.sort((a, b) => parseFloat(b.Members) - parseFloat(a.Members));
      return dataReddit; 
    } catch(e) {
      console.log(`Error when fetching for data from Redditt : ${e}`);    
  }
};

module.exports = retrieveDataFromReddit;