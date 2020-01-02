const getInfoReddit = function getInfoReddit(request, element, now) {
    return new Promise((resolve, reject) => {
        const url = `https://www.reddit.com/r/${element.nameReddit}/about.json`;
        request(url, function (error, response, body) {
          if (!error && response.statusCode == 200) {
             const subs = body.subscribers;
             const jsonObject = JSON.parse(body);
             const result = {
                 Subreddit: jsonObject.data.display_name,
                 Link: `www.reddit.com/r/${element.nameReddit}/`,
                 Category: element.category,   
                 Members: parseInt(jsonObject.data.subscribers),
                 Verification: element.verification ? element.verification : "Not required",
                 Sellers: element.sellers ? element.sellers : "Allowed",
                 Accounts_Online:jsonObject.data.accounts_active,
                 Update: `${now}`
             };
             return resolve(result);
          }
        });
    })
}

module.exports = getInfoReddit;