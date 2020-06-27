function slideMenu () {
	const menu_bar = document.querySelector('.menu_bar');
	const menu = document.querySelector('.menu');

	menu_bar.addEventListener('click', 
		function () {
			menu.classList.toggle('menu-active');
		});
}
slideMenu();

