async function colorSellers(sheet, maxRows) {
    for (let i =1; i < maxRows +1; i++) {
        const cell = sheet.getCell(i, 6);
        if(cell.value === 'Allowed') {
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

module.exports = colorSellers;