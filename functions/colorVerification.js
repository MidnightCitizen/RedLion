async function colorVerification(sheet, maxRows) {
    //await sheet.loadCells(`A1:G${maxRows +1}`);
   

    for (let i = 1; i < maxRows +1; i++) {
        let cell = sheet.getCell(i, 5);
        if(cell.value === 'Not required') {
          cell.backgroundColor =  {
            "red": 0.341,
            "green": 0.788,
            "blue": 0.458,
            "alpha": 1
          };
          
        } else {
          cell.backgroundColor =  {
            "red": 0.878,
            "green": 0.4,
            "blue": 0.4,
            "alpha": 1
          };
        }
        
        cell.horizontalAlignment = 'CENTER';
      }
}

module.exports = colorVerification;