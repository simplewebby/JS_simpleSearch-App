var form =document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);

//delete from list
itemList.addEventListener('click', removeItem);

//filter fro list
filter.addEventListener('keydown', filterItems);


//addItem function
function addItem(e){
e.preventDefault();
//get input value
var newItem = document.getElementById('item').value; 
//create new li element
var li = document.createElement('li');
//add class to new li
li.className ='list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newItem)) ;
 //create delete button
 var deleteBtn = document.createElement('button');
//add class to delete button
deleteBtn.className ='btn btn-danger btn-sm float-right delete';
//append text node
deleteBtn.appendChild(document.createTextNode('X'));
//append button to li
li.appendChild(deleteBtn);
//append li to list
itemList.appendChild(li);
}

function removeItem(e){
if(e.target.classList.contains('delete')){
    var li =e.target.parentElement;
    itemList.removeChild(li);
}
}

function filterItems(e){
 //convert to lower case
 var text =e.target.value.toLowerCase();
 //get list
var items = itemList.getElementsByTagName('li');
// convert HTML collection to array
Array.from(items).forEach(function(item){
var itemName = item.firstChild.textContent;
//compare input with list
if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display='block';
}
else{
    item.style.display = 'none';  
}
});

}