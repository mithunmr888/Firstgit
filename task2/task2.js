//get elements by class name
const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//below one gives error so refer forloop
//items[1].style.backgroundColor = '#f4f4f4';

for(let i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

//Deliverable
//Write the code as per the youtuber does
//Make the 3 rd element in the list have green background color
//Make all the elements in the list have bold color font

items[2].style.backgroundColor = '#00ff00';

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}