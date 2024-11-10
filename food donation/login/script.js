// Toggle between Signup and Login forms
function toggleForms() {
    const signupSection = document.getElementById('signup-section');
    const loginSection = document.getElementById('login-section');

    // Toggle visibility of signup and login sections
    if (signupSection.classList.contains('active')) {
        signupSection.classList.remove('active');
        loginSection.classList.add('active');
    } else {
        signupSection.classList.add('active');
        loginSection.classList.remove('active');
    }
}

// Signup logic
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Save credentials to local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Signup successful! You can now log in.');

    // Switch to login form after signup
    toggleForms();
});

// Login logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve stored credentials
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        
        // Redirect to receiver page
        window.location.href = "file:///D:/web%20pages/food%20donation/reciever/index.html";
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

