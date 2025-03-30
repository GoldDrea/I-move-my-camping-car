document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});

document.addEventListener("click", function(event) {
    let menu = document.querySelector(".menu");
    let button = document.querySelector(".menu-toggle");

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("active");
    }
});