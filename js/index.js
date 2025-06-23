// Getting global variables
const toggler = $(".light-dark-toggle");

$(document).ready(function() {
    // Check if user had light or dark mode toggled before and set appropriately
    if (localStorage.getItem("colorMode") === "light") {
        $("html").attr("data-color-mode", "light");
        toggler.children(".toggler").attr("aria-label", "Toggle dark mode");
    } else {
        $("html").attr("data-color-mode", "dark");
        toggler.children(".toggler").addClass("dark-mode-toggled");
        toggler.children(".toggler").attr("aria-label", "Toggle light mode");
    }
});

/*
    Set the light and dark mode 
*/
toggler.on("click", lightDarkMode);
function lightDarkMode() {
    if ($("html").attr("data-color-mode") === "light") {
        toggler.children(".toggler").addClass("dark-mode-toggled");
        toggler.children(".toggler").attr("aria-label", "Toggle light mode");
        localStorage.setItem("colorMode", "dark");
        $("html").attr("data-color-mode", "dark");
    } else {
        toggler.children(".toggler").removeClass("dark-mode-toggled");
        toggler.children(".toggler").attr("aria-label", "Toggle dark mode");
        localStorage.setItem("colorMode", "light")
        $("html").attr("data-color-mode", "light");
    }
}

/*
    Animating the window scroll when clicking on the navigation bar links
*/
const anchors = $(".nav-links > .scrolling-links");
const scroll_to_elements = $(".scrolling-to");
anchors.each(function(index) {
    $(this).click(function() {
        $("body").removeClass("lockscroll");
        $("html, body").animate({
            scrollTop: scroll_to_elements.eq(index).offset().top - 100
        }, 500, "swing");
    });
});


/*
    Adding 3D effect to the nav bar once the page has been scrolled down a bit
*/
const nav_bar = $(".main-nav");
$(window).scroll(function() {
    if ($(this).scrollTop() >= 40) {
        nav_bar.addClass("scrolled-into-page");
    } else {
        nav_bar.removeClass("scrolled-into-page");
    }
});
// Triggering the scroll event when the page loads
$(window).trigger("scroll"); 


/*
    Animating the window scroll when clicking on the Continue Button
*/
const continue_btn = $("main .home .continue-btn");
continue_btn.click(function() {
    $("body").removeClass("lockscroll");
    $("html, body").animate({
        scrollTop: scroll_to_elements.eq(1).offset().top - 100
    }, 500, "swing");
});


/*
    Keep label at top of the input if there is text inside the input element
*/
const form_inputs = $(".contact .contact-me-form > .input-wrapper > :is(input, textarea)");
form_inputs.each(function() {
    $(this).keyup(function() {
        if ($(this).is(":focus") && $(this).val() != "") {
            $(this).next("label").addClass("focused-with-text");
        } else {
            $(this).next("label").removeClass("focused-with-text");
        }
    })
});

/*
    Adding form input values into the email body
*/
const contactForm = $(".contact-me-form");
$(`.contact-me-form input[type="submit"]`).click( function(e) {
    e.preventDefault();
    location.href = "mailto:dannychung6158@gmail.com?body=" + contactForm["full-name"] + "\n" + contactForm.email + "\n" + contactForm["phone-number"] + "\n\n" + contactForm.message;
});