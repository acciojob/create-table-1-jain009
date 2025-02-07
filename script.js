function insert_Row() {
    //Write your code here
  document.addEventListner("DOMContentded", () => {
	 documnet.getElementById("insert_row").addEventListner("onclick", () => {
		 const table = document.getElementById("sampleTable");
		 const newRow = table.insertRow(0);
		  const columnCount = table.rows[1].cells.length;
    for (let i = 0; i < columnCount; i++) {
      const newCell = newRow.insertCell(i);
      newCell.textContent = `New Cell ${i + 1}`;
    } 
	 })
  })
  
}
