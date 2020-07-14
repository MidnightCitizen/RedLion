const deleteRows = async function deleteRows(rows, rowsCount) {
    console.log(`${rows.length} rows need to be deleted`);
    let j = 0;
      for(let i=rows.length -1; i >= 0 ; i = i -1) {
        j = j+1;
        if(j == 80 || j == 170) {
          console.log('Time to wait');
          await sleep(process.env.WAITING_TIME); // 100000
        }
        await rows[i].delete();
        console.log('Row deleted');
  
      }
      return;
    }

module.exports = deleteRows;