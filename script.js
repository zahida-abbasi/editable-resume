// Function to add a new academic field in the Education section
function addNewAcadamicField() {
    const academicContainer = document.getElementById('academicQ');
    if (academicContainer) {
        const newNode = document.createElement('textarea');
        newNode.classList.add('academic-field');
        newNode.setAttribute('rows', '3');
        newNode.setAttribute('placeholder', "Enter your academic details here");
        academicContainer.appendChild(newNode); // Appending the new field
    }
}
// Function to add a new skills field in the Skills section
function addNewSkills() {
    const skillsContainer = document.getElementById('skills');
    if (skillsContainer) {
        const newNode = document.createElement('textarea');
        newNode.classList.add('skills-field');
        newNode.setAttribute('rows', '3');
        newNode.setAttribute('placeholder', "Enter your skills here");
        skillsContainer.appendChild(newNode); // Appending the new field
    }
}
// Function to add a new work experience field in the Work Experience section
function addNewWorkExpField() {
    const workContainer = document.getElementById('workExperience');
    if (workContainer) {
        const newNode = document.createElement('textarea');
        newNode.classList.add('work-field');
        newNode.setAttribute('rows', '3');
        newNode.setAttribute('placeholder', "Enter your work experience here");
        workContainer.appendChild(newNode); // Appending the new field
    }
}
// Function to generate the CV
function generateCV() {
    // Get personal information
    const nameField = document.getElementById('nameField');
    const contactField = document.getElementById('contactField');
    const emailField = document.getElementById('emailField');
    const addressField = document.getElementById('addressField');
    // Update the CV display
    document.getElementById('nameDesign').innerHTML = nameField.value;
    document.getElementById('contactDesign').innerHTML = contactField.value;
    document.getElementById('emailDesign').innerHTML = emailField.value;
    document.getElementById('addressDesign').innerHTML = addressField.value;
    // Handle social links
    const fbLink = document.getElementById('fbField');
    const linkedInLink = document.getElementById('linkedInField');
    const githubLink = document.getElementById('githubField');
    document.getElementById('fbDesign').setAttribute("href", fbLink.value);
    document.getElementById('linkDesign').setAttribute("href", linkedInLink.value);
    document.getElementById('gitDesign').setAttribute("href", githubLink.value);
    // Handle profile image upload
    const profileFieldInput = document.getElementById('profileField');
    if (profileFieldInput && profileFieldInput.files && profileFieldInput.files.length > 0) {
        const profileField = profileFieldInput.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(profileField);
        reader.onloadend = function () {
            const profileImage = document.getElementById('profile');
            if (profileImage) {
                profileImage.src = reader.result;
            }
        };
    }
    // Display education information
    const academicFields = document.querySelectorAll('.academic-field');
    let educationList = "";
    academicFields.forEach(field => {
        educationList += `<li>${field.value}</li>`;
    });
    document.getElementById('eduDesign').innerHTML = educationList;
    // Display skills information
    const skillsFields = document.querySelectorAll('.skills-field');
    let skillsList = "";
    skillsFields.forEach(field => {
        skillsList += `<li>${field.value}</li>`;
    });
    document.getElementById('skillsDesign').innerHTML = skillsList;
    // Display work experience information
    const workFields = document.querySelectorAll('.work-field');
    let workList = "";
    workFields.forEach(field => {
        workList += `<li>${field.value}</li>`;
    });
    document.getElementById('workDesign').innerHTML = workList;
    // Show the generated CV and hide the form
    document.getElementById('designContainer').style.display = 'block';
    document.getElementById('inputContainer').style.display = 'none';
}
// Function to print the generated CV
function printCV() {
    window.print(); // Open the print dialog
}
// Adding event listeners when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Event listener for "Add More" buttons
    const addAcademicBtn = document.getElementById('addAcademicBtn');
    if (addAcademicBtn) {
        addAcademicBtn.addEventListener('click', addNewAcadamicField);
    }
    const addSkillsBtn = document.getElementById('addSkillsBtn');
    if (addSkillsBtn) {
        addSkillsBtn.addEventListener('click', addNewSkills);
    }
    const addWorkExpBtn = document.getElementById('addWorkExpBtn');
    if (addWorkExpBtn) {
        addWorkExpBtn.addEventListener('click', addNewWorkExpField);
    }
    // Event listener for "Generate CV" button
    const generateButton = document.getElementById('generateCVBtn');
    if (generateButton) {
        generateButton.addEventListener('click', generateCV);
    }
    // Event listener for "Print CV" button
    const printButton = document.getElementById('printCVBtn');
    if (printButton) {
        printButton.addEventListener('click', printCV);
    }
});
export {};
