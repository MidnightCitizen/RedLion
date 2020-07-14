function colorHeader(sheet) {
    for (let i =0; i < 7; i++) {
        const cell = sheet.getCell(0, i);
        cell.backgroundColor =  {
        "red": 215,
        "green": 131,
        "blue": 65,
        "alpha": 1
      };
        cell.textFormat = { bold: true };
        cell.horizontalAlignment = 'CENTER';
      }
}

module.exports = colorHeader;