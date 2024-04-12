var currentPage = window.location.pathname;


var projectsLink = document.getElementById('projects-link');
var experienceLink = document.getElementById('experience-link');
var resumeLink = document.getElementById('resume-link');
var contactLink = document.getElementById('contact-link');

    if (currentPage.includes('projects.html')) {
        projectsLink.classList.add('current-page');
    } else if (currentPage.includes('experience.html')) {
        experienceLink.classList.add('current-page');
    } else if (currentPage.includes('resume.html')) {
        resumeLink.classList.add('current-page');
    } else if (currentPage.includes('contact.html')) {
        contactLink.classList.add('current-page');
    }
