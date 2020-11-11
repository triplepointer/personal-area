const page = document.querySelector(".page");
const expander = document.querySelector(".sidebar__expander");
const shrinker = document.querySelector(".sidebar__shrinker");
const sidebarHeaderLogo = document.querySelector(".sidebar .header__logo");
const headerLogo = document.querySelector(".header .header__logo");
const sidebarText = document.querySelectorAll(".sidebar__text");
const sidebarSettingsBottom = document.querySelector(".sidebar__settings-bottom");

expander.addEventListener("click", () => {
    page.classList.add("active");
    expander.style.display = 'none';
    shrinker.style.display = "flex";
    sidebarHeaderLogo.style.display = "inline-block";
    headerLogo.style.display = "none";
    sidebarText.forEach((el) => {
        el.style.display = 'block';
    }) 
    sidebarSettingsBottom.style.display = "block";
});

shrinker.addEventListener("click", () => {
    page.classList.remove("active");
    shrinker.style.display = 'none';
    expander.style.display = 'flex';
    sidebarHeaderLogo.style.display = "none";
    sidebarText.forEach((el) => {
        el.style.display = 'none';
    }) 
    headerLogo.style.display = "inline-block";
    sidebarSettingsBottom.style.display = "none";
});