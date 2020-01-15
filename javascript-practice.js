// Dark mode
const body = document.querySelector('body');
body.style.cssText = 'background-color: black; color: white;';
// Don't remove anything above this comment

// Exercise

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code here

 function generateTableHead(table, data) {
   let thead = table.createTHead();
   let row = thead.insertRow();
   for (let key of data) {
       let th = document.createElement("th");
       let text = document.createTextNode(key);
       th.appendChild(text);
       row.appendChild(th);
   }
 }

 function generateTable(table, data) {
     for (let element of data) {
         let row = table.insertRow();
         for (key in element) {
             let cell = row.insertCell();
             let text = document.createTextNode(element[key]);
             cell.appendChild(text);
         }
     }
 }
 
 let table = document.querySelector("table");
 let data = Object.keys(MOUNTAINS[0]);
 generateTableHead(table, data);
 generateTable(table, MOUNTAINS);

 