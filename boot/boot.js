function onsignup(event) {
    event.preventDefault();

    
    const expansement = document.querySelector('#expansement').value;
    const description1 = document.querySelector('#description1').value;
    const description2 = document.querySelector('#description2').value;

    
    const entry = {
        expansement,
        descriptions: [description1, description2],
    };

    
    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    
    entries.push(entry);

    
    localStorage.setItem('entries', JSON.stringify(entries));

    
    document.querySelector('#expansement').value = '';
    document.querySelector('#description1').value = '';
    document.querySelector('#description2').value = '';

    
    refreshEntries();
}


function refreshEntries() {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    
    entries.forEach((entry, index) => {
        const div = document.createElement('div');
        div.innerHTML = `${entry.expansement} ${entry.descriptions.join(' ')} <button onclick="deleteEntry(${index})">Delete</button> <button onclick="editEntry(${index})">Edit</button>`;
        container.appendChild(div);
    });
}


function deleteEntry(index) {
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.splice(index, 1);
    localStorage.setItem('entries', JSON.stringify(entries));
    refreshEntries();
}





refreshEntries();