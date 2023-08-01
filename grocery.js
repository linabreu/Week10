
let rowID = 1;


//function for populating the value from the date picker
let date; //undefined and then reassign in the function
document.getElementById("shoppingDate").addEventListener("change", function() {
    var input = this.value;
    var inputAsDate = new Date(input);
    formattedDate =  `${inputAsDate.getMonth() +1}/${inputAsDate.getDate() + 1}/${inputAsDate.getFullYear()} `;
    date = formattedDate;
});

let createDeleteButton = (rowID) =>
{
   let deleteButton = document.createElement('button');
   deleteButton.className = 'btn btn-warning';
   deleteButton.id = `buttonNum${rowID}`;
   deleteButton.innerHTML = "Delete";
   deleteButton.onClick = () =>
   {
        let toDelete = document.getElementById(rowID);
        let groceryTable = document.getElementById("groceryTable");
        groceryTable.removeChild();
        //console.log("works!")
   }
   return deleteButton;
}

//function to be executed when the button is clicked
let button = document.getElementById('addBtn');
const  addItem = () =>
{
    let store = document.getElementById('store').value;
    document.getElementById('tableTitle').innerHTML = `${store} List for ${date}`;
    

    let table = document.getElementById('groceryTable');
    let row = table.insertRow(1);
    row.id = rowID
    row.insertCell(0).innerHTML = document.getElementById('itemToPurchase').value;
    row.insertCell(1).innerHTML = document.getElementById('quantity').value;
    row.insertCell(2).innerHTML = document.getElementById('department').value;
    row.insertCell(3).append(createDeleteButton(rowID));

    rowID++;
};

button.addEventListener('click', addItem);
createDeleteButton(1);
