//queryselector

/*var header = document.querySelector('#main-header');
console.log(header);
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'coral';

Deliverable
Make the 2nd item have green background color
Make the 3rd item invisible

seconditem.style.background = 'green';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.textContent = '';*/



//query selector all

/*var titles = document.querySelectorAll('.title');//here . means class
console.log(titles);

titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}*/


/*Deliverable
Using QuerySelectorALL change the font color to green for 2nd item in the item list
Choose all the odd elements and make their background green using QuerySelectorALL﻿*/

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#00ff00';
    even[0].style.color = 'green';
}



