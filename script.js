document.querySelectorAll('header nav li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('scroll', function () {
    const projects = document.getElementById('projects');
    const contentHeight = projects.offsetHeight;
    const yOffset = window.pageYOffset;
    const y = yOffset + window.innerHeight;

    if (y >= contentHeight + projects.offsetTop) {
        loadMoreProjects();
    }
});

function loadMoreProjects() {
    const projectContainer = document.getElementById('projects');


    const newProject = document.createElement('div');
    newProject.className = 'p-1';
    newProject.innerHTML = `
        <video src="your-video-source.mp4" controls></video>
        <p>Your new project description goes here. This content is dynamically loaded as you scroll.</p>
        <a href="#">View Project</a>
    `;

    projectContainer.appendChild(newProject);
}


const skillSections = document.querySelectorAll('.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

skillSections.forEach(section => {
    observer.observe(section);
});

