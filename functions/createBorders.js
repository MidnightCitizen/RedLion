async function createBorders(sheet, maxRows) {
    for (let i =0; i < maxRows +1; i++) {
        for (let j =0; j < 7; j++) {
          const cell = sheet.getCell(i, j);
          cell.borders = {
                "top": {
                "style": 'SOLID',
                },
                "bottom": {
                "style": 'SOLID',
                },
                "left": {
                "style": 'SOLID',
                },
                "right": {
                "style": 'SOLID',
                }
      }
      cell.horizontalAlignment = 'CENTER';
        }
      }
}

module.exports = createBorders;