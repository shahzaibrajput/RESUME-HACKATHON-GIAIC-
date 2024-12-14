const form = document.getElementById('resume-form') as HTMLFormElement;
const resumediplayElement = document.getElementById('resume-display') as HTMLDivElement;



form.addEventListener('submit' , (event:Event) => {

  event.preventDefault();  //prevent page reload 

  const name = (document.getElementById('name') as HTMLInputElement).value
  const email = (document.getElementById('email') as HTMLInputElement).value
  const phone = (document.getElementById('phone') as HTMLInputElement).value
  const education = (document.getElementById('education') as HTMLInputElement).value
  const skills = (document.getElementById('skills') as HTMLInputElement).value
  const experiece = (document.getElementById('experience') as HTMLInputElement).value

   const resumehtml = `
   <h2><b>Resume</b></h2>
   <h3>Personal Information</h3>
   <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
     <p><b>Phone:</b> ${phone}</p>

      <h3>Education</h3>
   <p>${education}</p>

    <h3>Skills</h3>
   <p>${skills}</p>

    <h3>Experience</h3>
   <p>${experiece}</p>

   `;
   //Display Generated Resume
   if(resumediplayElement) {
    resumediplayElement.innerHTML = resumehtml;
   }else {
    console.error("The Resume display Elements are missing")
   }
   
   
})