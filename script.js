function toggleMenu(){
    const menu = document.querySelector(".menu-links");/*targeting menulikns */
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}