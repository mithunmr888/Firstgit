var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//delete item
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filteritems);

//add item
function addItem(e){
    e.preventDefault();

    //create input value
    var newitem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newitem));
    
    //create delete button
    var deletebtn = document.createElement('button');

    //add class to dletebtn
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deletebtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deletebtn);

    // create edit button
    //var editbtn = document.createElement('button');

    // add class to editbtn
   // editbtn.className = 'btn btn-info btn-sm float-right edit';

    // append text node
   // editbtn.appendChild(document.createTextNode('Edit'));

    // append button to li
    li.appendChild(editbtn);

    //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    //}else if (e.target.classList.contains('edit')) {
        // Add your edit functionality here if needed in the future
    }
    
}


//filter items
function filteritems(e){
    //convert text to lower case
    var text = e.target.value.toLowerCase();
    //console.log(text);
    //get list
    var items = itemList.getElementsByTagName('li');
    //console.log(items);//since its html collection we need to convert to array
    //convert array
    Array.from(items).forEach(function(item){
        var itemname = item.firstChild.textContent;
        //console.log(itemname);
        if(itemname.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}