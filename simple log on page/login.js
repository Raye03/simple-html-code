// Array of user objects
const users = [
    { username: 'QE.Aryea', password: 'password1', redirectPage: 'updates.html' },
    { username: 'QE.Garland', password: 'password2', redirectPage: 'updates.html' },
    { username: 'QE.Domanic', password: 'password3', redirectPage: 'updates.html' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values entered by the user
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Find the user in the array
    const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

    if (user) {
        // If user found, redirect to their specific page
        window.location.href = user.redirectPage;
    } else {
        // If user not found or password incorrect, show an alert
        alert('Incorrect username or password. Please try again.');
    }
});