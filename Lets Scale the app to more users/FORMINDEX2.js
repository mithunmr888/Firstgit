function onsignup(event) {
    event.preventDefault();

    // Get form values
    var userName = document.getElementById('fname').value;
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('pword').value;
    var callDateTime = document.getElementById('dword').value;

    // Create user object
    var user = {
        name: userName,
        email: userEmail,
        password: userPassword,
        datetime: callDateTime
    };

    // Retrieve existing users from local storage
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the existing users
    existingUsers.push(user);

    // Store updated users array in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Display the users on the webpage
    displayUsers(existingUsers);

    // Reset the form
    document.getElementById('fname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pword').value = '';
    document.getElementById('dword').value = '';
}

function displayUsers(users) {
    var listContainer = document.getElementById('listofitems');
    listContainer.innerHTML = '';

    users.forEach(function(user) {
        var listItem = document.createElement('li');
        listItem.textContent = `User Name: ${user.name}, Email: ${user.email}, Password: ${user.password}, Date and Time: ${user.datetime}`;
        listContainer.appendChild(listItem);
    });
}

// Initial call to display existing users on page load
var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
displayUsers(existingUsers);