//queryselector

var header = document.querySelector('#main-header');
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

/*Deliverable
Make the 2nd item have green background color
Make the 3rd item invisible*/

seconditem.style.background = 'green';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.textContent = '';


