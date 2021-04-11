// smooth scroll
$(function () {
    $(".menu a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
    });
});


const toggleButton  = document.getElementsByClassName("toggle-button")[0]
const navLinks = document.getElementsByClassName("nav-links")[0]

toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})