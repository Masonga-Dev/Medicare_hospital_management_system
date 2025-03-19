// Handle Signup Form Submission
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Here you would typically send this data to a server
    document.getElementById('signupMessage').innerText = `Account created for: ${name}`;
    this.reset();
});

// Handle Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Here you would typically validate the login credentials
    document.getElementById('loginMessage').innerText = `Logged in as: ${email}`;
    this.reset();
});

// Handle Appointment Form Submission
document.getElementById('appointmentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const doctor = document.getElementById('doctor').value;

    // Here you would typically send this data to a server
    document.getElementById('appointmentMessage').innerText = `Appointment booked for ${firstName} ${lastName} with ${doctor}.`;
    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const doctorSelect = document.getElementById('doctor');
    const timeSelect = document.getElementById('time');

    const availableTimes = {
        'Dr. John Doe': ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'],
        'Dr. Jane Smith': ['10:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '04:00 PM'],
        'Dr. Emily Johnson': ['09:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '04:00 PM']
    };

    doctorSelect.addEventListener('change', function() {
        const selectedDoctor = doctorSelect.value;
        const times = availableTimes[selectedDoctor] || [];

        timeSelect.innerHTML = '<option value="" disabled selected>Select a time</option>';
        times.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    });

    const bedBookingForm = document.getElementById('bedBookingForm');
    const bookingMessage = document.getElementById('bookingMessage');

    bedBookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form values
        const patientName = document.getElementById('patientName').value;
        const age = document.getElementById('age').value;
        const telephone = document.getElementById('telephone').value;
        const email = document.getElementById('email').value;
        const disease = document.getElementById('disease').value;
        const bedType = document.getElementById('bedType').value;

        // Display confirmation message
        bookingMessage.innerHTML = `
            <p>Thank you, ${patientName}. Your bed booking has been received.</p>
            <p>Details:</p>
            <ul>
                <li>Age: ${age}</li>
                <li>Telephone: ${telephone}</li>
                <li>Email: ${email}</li>
                <li>Disease: ${disease}</li>
                <li>Bed Type: ${bedType}</li>
            </ul>
        `;

        // Clear the form
        bedBookingForm.reset();
    });
});