// when burger is clicked, navigation menu slides in from the right
const right_nav = function () {
    const burger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    
    burger.addEventListener("click", () => {
        nav.classList.toggle('burgerclicked');
    });
}

// calling right_nav function
const home_page = function () {
    right_nav();
}

home_page();
