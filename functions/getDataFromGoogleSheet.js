function getDataFromGoogleSheet(reddits) {
  const dataFromGoogleSheet = [];
  for(let i=0; i<reddits.length; i++) {
    dataFromGoogleSheet.push({
      "nameReddit":reddits[i].Name, 
      "category":reddits[i].Category, 
      "verification":reddits[i].Verification,
      "sellers":reddits[i].Sellers});

}
return dataFromGoogleSheet;
}

module.exports = getDataFromGoogleSheet;