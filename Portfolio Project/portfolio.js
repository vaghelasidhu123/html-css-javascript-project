// Function to hide all sections
function hideSections() {
    const sections = document.querySelectorAll('.container > div[id]');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
}

// Smooth Scroll Function for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Hide all sections first
        hideSections();
        
        // Get the target section's id (e.g., "about", "skills", etc.)
        const targetId = this.getAttribute('href').substring(1); // Remove the "#" symbol

        // Use if-else condition to check which section to show
        if (targetId === 'home') {
            document.getElementById('home').style.display = 'block'; // Show Home section
        } else if (targetId === 'about') {
            document.getElementById('about').style.display = 'block'; // Show About section
        } else if (targetId === 'skills') {
            document.getElementById('skills').style.display = 'block'; // Show Skills section
        } else if (targetId === 'projects') {
            document.getElementById('projects').style.display = 'block'; // Show Projects section
        } else if (targetId === 'contact') {
            document.getElementById('contact').style.display = 'block'; // Show Contact section
        }

        // Scroll to the section smoothly
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 90,  // Adjust to avoid overlap with the fixed navbar
            behavior: 'smooth'
        });
    });
});

// Function to download the resume
function downloadBtn(){
    const link = document.createElement('a');
    link.href = 'sidhuresume2.pdf';
    link.download = 'Vaghela_Siddhrajsinh_Resume.pdf';
    link.click();
}

// Function to open the resume in a new tab
function viewResume(){
    window.open('sidhuresume2.pdf','_blank');
}

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");

    if(name.value === "" || email.value === "" || msg.value === ""){
        alert("Please fill in all details.");
    } else {
        alert("Thank you for connecting! I'll get back to you soon.");

        // Clear form fields
        name.value = "";
        email.value = "";
        msg.value = "";
    }
});
