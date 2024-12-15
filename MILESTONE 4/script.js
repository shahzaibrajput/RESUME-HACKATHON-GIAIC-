var form = document.getElementById('resume-form');
var resumediplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experiece = document.getElementById('experience').value;
    var resumehtml = "\n   <h2><b>Resume</b></h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n     <p><b>Phone:</b> ").concat(phone, "</p>\n\n      <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n    <h3>Skills</h3>\n   <p>").concat(skills, "</p>\n\n    <h3>Experience</h3>\n   <p>").concat(experiece, "</p>\n\n   ");
    //Display Generated Resume
    if (resumediplayElement) {
        resumediplayElement.innerHTML = resumehtml;
    }
    else {
        console.error("The Resume display Elements are missing");
    }
});
