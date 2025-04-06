document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const course = document.getElementById('course').value;
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }


    alert(`Registration Successful! \nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nDate of Birth: ${dob}\nGender: ${gender}\nCourse: ${course}`);
    document.getElementById('registrationForm').reset();
});