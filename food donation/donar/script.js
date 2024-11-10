document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit

    // Get form values
    const foodType = document.getElementById('foodType').value;
    const peopleCount = document.getElementById('peopleCount').value;
    const donorAddress = document.getElementById('donorAddress').value;

    // Validate donor address is a 10-digit number
    if (!/^\d{10}$/.test(donorAddress)) {
        alert("Please enter a valid 10-digit phone number.");
        return; // Stop further execution if validation fails
    }

    // Show a success message
    alert(`Thank you for donating ${foodType} for ${peopleCount} people! We will collect it from: ${donorAddress}`);
    
    // Reset form fields
    this.reset();
});
function redirectToTrackingPage(event) {
    event.preventDefault(); // Prevent form from submitting in the default way

    const donationId = document.getElementById('donationId').value;

    // Validate donation ID is a 10-digit number
    if (!/^\d{10}$/.test(donationId)) {
        alert("Please enter a valid 10-digit phone number.");
        return; // Stop further execution if validation fails
    }
    
    // Construct the URL with the donation ID
    const trackingUrl = `file:///D:/web%20pages/food%20donation/Maps%20Integration/index.html`;
    
    // Redirect to the tracking page
    window.location.href = trackingUrl;
}

