// get elements by tag name

const li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

//below one gives error so refer forloop
//items[1].style.backgroundColor = '#f4f4f4';

for(let i=0; i<li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

//Add a new li element without the same class Name
//ementsbyclassname and then by getelementbytagname//And try editing it with getel

const h = document.getElementsByTagName('h1');
console.log(h);

h[0].textContent = 'item LISTER';
h[0].style.fontWeight = 'bold';
h[0].style.background = 'black';