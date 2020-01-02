const getDate = function getDate() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    
    const year_month_day = year + "-" + month + "-" + day;

    return year_month_day;
}

module.exports = getDate;