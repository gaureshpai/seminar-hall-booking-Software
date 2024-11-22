document.querySelector('.submit-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const adminEmail = 'admin@example.com'; // Replace this with the actual admin email
    const adminPassword = 'password123'; // Replace this with the actual admin password

    if (email === adminEmail && password === adminPassword) {
        window.location.href = 'admin-panel.html'; // Replace with the actual URL of your admin panel
    } else {
        alert('Invalid Email or Password');
    }
});


