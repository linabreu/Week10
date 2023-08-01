
let button = document.getElementById('addBtn');


/*
const  addItem = () =>
{
    document.getElementById('tableTitle').innerHTML = "My list";
};*/


const  addItem = () =>
{
    test
    document.getElementById('tableTitle').innerHTML = "My list";
    let table = document.getElementById('groceryTable');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = document.getElementById('itemToPurchase').value;
    row.insertCell(1).innerHTML = document.getElementById('quantity').value;
    row.insertCell(2).innerHTML = document.getElementById('department').value;
};

button.addEventListener('click', addItem);

console.log("Javascript fired!")