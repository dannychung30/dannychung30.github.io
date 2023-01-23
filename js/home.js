// when burger is clicked, navigation menu slides in from the right
function right_nav () {
    const burger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const nav_links = document.querySelectorAll('#nav li');
    const svg = document.querySelector('svg');
    
    burger.addEventListener("click", () => {
        nav.classList.toggle('burgerclicked');
        svg.classList.toggle('svg-hidden-when-burger-clicked');
        // make body hidden instead of just svg so it can work for anything on the page
    });
}

// on click of projects, display the project info
function click_projects () {
    const projects = document.querySelectorAll('.backgrounds');
    const project_content = document.querySelectorAll('.projects .dropdown-content');

    for (let i = 0; i < projects.length; i++) {
        projects[i].addEventListener('click', () => {
            // add clicked-projects class to every <li>
            project_content[i].classList.toggle('clicked-projects');
        });
    }
}

function close_displayed_projects () {
    const close_buttons = document.querySelectorAll('.close-button');
    const project_content = document.querySelectorAll('.projects .dropdown-content');

    for (let i = 0; i < close_buttons.length; i++) {
        close_buttons[i].addEventListener('click', () => {
            project_content[i].classList.toggle('clicked-projects');
        });
    }
}

// calling all functions
const home_page = function () {
    right_nav();
    click_projects();
    close_displayed_projects();
}

home_page();
