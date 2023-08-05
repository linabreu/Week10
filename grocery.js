
//these are all global variables
let rowID = 1;
let button = document.getElementById('addBtn');
let date;
let sortButton = document.getElementById('sortBtn');



document.getElementById("shoppingDate").addEventListener("change", function() {
    var input = document.getElementById("shoppingDate").value;
    var inputAsDate = new Date(input);
    let formattedDate =  `${inputAsDate.getMonth() +1}/${inputAsDate.getUTCDate()}/${inputAsDate.getFullYear()} `;
    //document.getElementById('shoppingDate').innerHTML = inputAsDate == "Invalid Date" ? "next grocery store trip" : formattedDate;
    document.getElementById('tableTitle').innerHTML = `${store} List for ${date}`;
    inputAsDate == "Invalid Date" ? document.getElementById("tableTitle").innerHTML = "Grocery Store List for Next Shopping Trip" : document.getElementById("tableTitle").innerHTML = `Grocery Store List for ${formattedDate}`;
});

document.getElementById("store").addEventListener("change", function() {
    var storeName = document.getElementById("store").value;
    storeName == "Select your shopping destination" ? document.getElementById("storeTitle").innerHTML = "" : document.getElementById("storeTitle").innerHTML = `Shopping At: ${storeName}`
}


)

const createDeleteButton = (rowID) =>
{
   let deleteButton = document.createElement('button');
   deleteButton.className = 'btn redButton';
   deleteButton.id = `buttonNum${rowID}`;
   deleteButton.innerHTML = "Delete";

   //why does this only work when it's written like this??
   const removeItem = () =>
   {
        let toDelete = document.getElementById(rowID);
        let groceryTable = document.getElementById("groceryTable");
        toDelete.parentNode.removeChild(toDelete);
   }

   deleteButton.addEventListener('click', removeItem);
   return deleteButton;
}



//function to add items
const  addItem = () =>
{
    let table = document.getElementById('groceryTable');
    let row = table.insertRow(1);
    row.id = rowID

    let itemToPurchase = document.getElementById('itemToPurchase').value;
    let quantity = document.getElementById('quantity').value;
    let department = document.getElementById('department').value;

    if(itemToPurchase == null || quantity == null || department == "Select a grocery department") //don't want the row to populate if it's blank
    {
        alert("Please enter a valid item!")
    }
    else
    {
        row.insertCell(0).innerHTML = itemToPurchase;
        row.insertCell(1).innerHTML =  quantity;
        row.insertCell(2).innerHTML = department;
        row.insertCell(3).append(createDeleteButton(rowID));
    }
    rowID++;
};


button.addEventListener('click', addItem);


