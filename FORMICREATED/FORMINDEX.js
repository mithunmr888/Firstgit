function onsignup(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Get the form values
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var pword = document.getElementById('pword').value;
    var dword = document.getElementById('dword').value;

    // Create an object to hold the user details
    var userDetails = {
        fname: fname,
        email: email,
        pword: pword,
        dword: dword
    };

    // Convert the object to a JSON string
    var userDetailsJSON = JSON.stringify(userDetails);

    // Store the JSON string in local storage
    localStorage.setItem('userDetails', userDetailsJSON);
    //console.log(userDetailsJSON);

    // Optional: Provide some feedback to the user
    alert('Details stored successfully!');
}