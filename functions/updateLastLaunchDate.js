async function updateLastLaunchDate(sheet) {
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
   
    await sheet.loadCells('F1:F5');

    const f1 = sheet.getCellByA1('F1');
    f1.value = 'Last Update';
    const f2 = sheet.getCellByA1('F2');
    f2.value = `${year}-${month}-${date} ${hours}h${minutes}m${seconds}s`;

    await sheet.saveUpdatedCells();
}

module.exports = updateLastLaunchDate;