function onsignup(event) {
    event.preventDefault();

    var userName = document.getElementById('fname').value;
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('pword').value;
    var callDateTime = document.getElementById('dword').value;

    var user = {
        name: userName,
        email: userEmail,
        password: userPassword,
        datetime: callDateTime
    };

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(user);

    localStorage.setItem('users', JSON.stringify(existingUsers));

    displayUsers(existingUsers);

    document.getElementById('fname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pword').value = '';
    document.getElementById('dword').value = '';
}

function displayUsers(users) {
    var listContainer = document.getElementById('listofitems');
    listContainer.innerHTML = '';

    users.forEach(function(user, index) {
        var listItem = document.createElement('li');
        listItem.textContent = `User Name: ${user.name}, Email: ${user.email}, Password: ${user.password}, Date and Time: ${user.datetime}`;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteUser(index);
        });

        listItem.appendChild(deleteButton);
        listContainer.appendChild(listItem);
    });
}

function deleteUser(index) {
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    displayUsers(existingUsers);
}

var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
displayUsers(existingUsers);