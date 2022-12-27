// when burger is clicked, navigation menu slides in from the right
function right_nav () {
    const burger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const nav_links = document.querySelectorAll('#nav li');
    
    burger.addEventListener("click", () => {
        nav.classList.toggle('burgerclicked');
    });
}

// calling all functions
const home_page = function () {
    right_nav();
}

home_page();
