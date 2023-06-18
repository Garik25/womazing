const burgerMenu = document.querySelector(".burger__menu ");
console.log(burgerMenu)
const menuactic = document.querySelector(".nav_menu ")
console.log(menuactic)




burgerMenu.addEventListener("click", function () {
	if (!this.classList.contains("active")) {
		this.classList.add("active");
		menuactic.classList.add("nav__menu__active");
	} else {
		this.classList.remove("active");
		menuactic.classList.remove("nav__menu__active");
	}
});