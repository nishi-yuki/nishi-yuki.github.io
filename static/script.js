const header = document.querySelector("header");

window.addEventListener("scroll", event => {
    if (window.scrollY > 30) {
        header.classList.add("scrolling");
    } else {
        header.classList.remove("scrolling");
    }
    console.log(window.scrollY);
});
