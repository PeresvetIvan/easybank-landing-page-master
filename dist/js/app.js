class App {

    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.menu = document.querySelector('.nav__menu');
        this.menu_bg = document.querySelector('.menu-background');
    }

    menuPopup = () => {
        this.hamburger.classList.toggle('hamburger--checked');
        this.menu.classList.toggle('nav__menu--opened');
        this.menu_bg.classList.toggle('menu-background--opened');
    }

    init() {
        this.hamburger.addEventListener('click', this.menuPopup);
    }

}

const app = new App();
app.init();


