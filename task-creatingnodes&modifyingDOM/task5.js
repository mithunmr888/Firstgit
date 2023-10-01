// traversing the dom

var itemlist = document.querySelector('#items');
//parentnode
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemlist.parentNode.parentNode.parentNode);

//parentelement
//console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemlist.parentElement.parentElement.parentElement);.backgr

//childnodes
//console.log(itemlist.childNodes); // dontuseit very difficult to grasp coz it also counts linebrk

//children -> use it instead
//console.log(itemlist.children);// notice it is a html collection not nodes of array as before
//console.log(itemlist.children[1]);
//itemlist.children[1].style.backgroundColor = 'yellow';

//firstchild
//console.log(itemlist.firstChild); // its as useless as childnode for the samereason

//firstelementchild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent = 'Hello 1';

//lastchild
//console.log(itemlist.lastChild); // its as useless as childnode for the samereason

//lastelementchild
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent = 'Hello 4';

//nextsibling
//console.log(itemlist.nextSibling); //useless

//nextelementsibling
//console.log(itemlist.nextElementSibling);//gives null becoz we dont hav any siblings after items list if u want add then add <span>watever</span> after line 29 u get sibling

//previoussibling
//console.log(itemlist.previousSibling);//useless referabove

//previouselementsibling
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color = 'green';



//create element

//create div
//var newdiv = document.createElement('div');
//creat class
//newdiv.className = 'Hello';
//create ID
//newdiv.id = 'Hello1';
//create attribute
//newdiv.setAttribute('title','Hello div');
//now u have to create text node
//var txtnode = document.createTextNode('Hello World');
//now add text to div
//newdiv.appendChild(txtnode);

//IMPORTANT now show this in webpage
//var container = document.querySelector('header .container')
//var h1 = document.querySelector('header h1');

//insert txtnode before h1
//container.insertBefore(newdiv, h1);

//now its a part of DOM congo now you can adjust watever u want
//newdiv.style.fontSize = '30px';
//console.log(newdiv);

//Now go head and add HEllo word before Item Lister
//Now go head and add HEllo word before Item 1

// Create first div
var newdiv1 = document.createElement('div');
newdiv1.className = 'Hello';
newdiv1.id = 'Hello1';
newdiv1.setAttribute('title','Hello div');
var txtnode1 = document.createTextNode('Hello World');
newdiv1.appendChild(txtnode1);

// Create second div
var newdiv2 = document.createElement('div');
newdiv2.className = 'Hello';
newdiv2.id = 'Hello2';  // Changed ID to Hello2
newdiv2.setAttribute('title','Hello div');
var txtnode2 = document.createTextNode('Hello World');
newdiv2.appendChild(txtnode2);

// Find elements to insert before
var headerTitle = document.getElementById('header-title');
var itemsList = document.getElementById('items');

// Insert "Hello World" before "Item Lister"
var container = document.querySelector('header .container');
container.insertBefore(newdiv1, headerTitle);

// Insert "Hello World" before "Item 1"
itemsList.insertBefore(newdiv2, itemsList.firstElementChild);