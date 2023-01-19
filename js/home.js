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

// on hover/mouseover of projects, display the project info
function hover_projects () {
    const projects = document.querySelectorAll('.projects li');
    const project_content = document.querySelectorAll('.projects div');

    for (let i = 0; i < projects.length; i++) {
        projects[i].addEventListener('click', () => {
            // add hovered-projects class to every <li>
            project_content[i].classList.toggle('hovered-projects');
        });
        /*
        projects[i].addEventListener('mouseout', () => {
            // remove hovered-projects class to every <a>
            project_content[i].classList.toggle('hovered-projects');
        }); */
    }
}

// calling all functions
const home_page = function () {
    right_nav();
    hover_projects();
}

home_page();
