let isNavMenuOpen = false;

const navMenu = document.querySelector('.navbar');
const navMenuButton = document.querySelector('.site-header button');
const navMenuIcon = document.querySelector('.site-header button svg:first-child');
const navCloseIcon = document.querySelector('.site-header button svg:last-child');

navMenuButton.addEventListener('click', () => {
	isNavMenuOpen = !isNavMenuOpen;

	if (isNavMenuOpen) {
		navMenu.classList.add('navbar--show');
		navMenuIcon.classList.add('btn__icon--hidden');
		navMenuIcon.classList.remove('btn__icon--show');
		navCloseIcon.classList.remove('btn__icon--hidden');
		navCloseIcon.classList.add('btn__icon--show');
	} else {
		navMenu.classList.remove('navbar--show');
		navCloseIcon.classList.add('btn__icon--hidden');
		navCloseIcon.classList.remove('btn__icon--show');
		navMenuIcon.classList.remove('btn__icon--hidden');
		navMenuIcon.classList.add('btn__icon--show');
	}
});
