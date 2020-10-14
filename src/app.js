var XLSX = require("xlsx");

let argfv = process.argv[2]

const EXCELAJSON = () => {
  const excel = XLSX.readFile(
    argfv // XLSX file path
  );
  const sheetName = excel.SheetNames; // returns an array
  let jsonSheet = XLSX.utils.sheet_to_json(excel.Sheets[sheetName[0]]);
  
  const transformData = jsonSheet.map(data => {
    let arr = { 
        "partner_store_id": data.ID_Tienda,
        "rappi_store_id": data.Store_Id,
        "comments": "comments"
      }; //Set the data
    return arr
});
console.log(JSON.stringify(transformData))
}

EXCELAJSON();