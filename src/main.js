// Light and Dark Mode
const changeThemeButton = document.querySelector("#theme-toggle");

changeThemeButton.addEventListener("click", () => {
    document.querySelector("html").classList.toggle('dark')
    changeThemeButton.querySelector('.bi').classList.toggle('bi-sun')
    changeThemeButton.querySelector('.bi').classList.toggle('bi-moon')
});

// Toggle Menu Icon
const menuButton = document.querySelector('#menuButton')

menuButton.addEventListener('click', () => {
    menuButton.querySelector('.bi').classList.toggle('bi-justify-right')
    menuButton.querySelector('.bi').classList.toggle('bi-x-lg')
})
