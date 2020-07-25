const getInfoReddit = function getInfoReddit(request, element) {
    return new Promise((resolve, reject) => {
        const url = `https://www.reddit.com/r/${element.nameReddit}/about.json`;
        request(url, function (error, response, body) {
          if (!error && response.statusCode == 200) {
             const jsonObject = JSON.parse(body);
             const result = {
                 Category: element.category,
                 Subreddit: `=HYPERLINK("www.reddit.com/r/${element.nameReddit}";"${jsonObject.data.display_name}")`,
                 BestTime: `=HYPERLINK("postinspect.com/app?query=${element.nameReddit}";"Best Time ${element.nameReddit}")`,
                 Members: parseInt(jsonObject.data.subscribers),
                 Accounts_Online:jsonObject.data.accounts_active > 0 ? jsonObject.data.accounts_active : 0,
                 Verification: element.verification ? "Required" : "Not required",
                 Sellers: element.sellers ? "Allowed" : "Not allowed",
                 
             };
             return resolve(result);
          } else {
              console.log(`A problem occured with the subreddit ${element.nameReddit}`);
              return reject('empty');
          }
        });
    })
}

module.exports = getInfoReddit;