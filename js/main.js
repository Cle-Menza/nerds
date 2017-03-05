var link = document.querySelector('.map_contacts_btn');
var popupForm = document.querySelector('.popup-form');
var closePopup = document.querySelector('.popup-form-btn-close');
var overlay = document.querySelector('.overlay');
var sliders = document.querySelector('.sliders');

link.addEventListener('click', function (event) {
	event.preventDefault();
	popupForm.classList.add('anim')
	popupForm.classList.add('show-popup')
	overlay.classList.add('show-popup')
});

closePopup.addEventListener('click', function (event) {
	event.preventDefault();
	popupForm.classList.remove('show-popup')
	popupForm.classList.remove('anim')
	overlay.classList.remove('show-popup')
});

window.addEventListener('keydown', function (event) {
	if (event.keyCode === 27) {
		if (popupForm.classList.contains('show-popup')) {
			popupForm.classList.remove('show-popup')
			popupForm.classList.remove('anim')
			overlay.classList.remove('show-popup')
		}
	}
});

overlay.addEventListener('click', function (e) {
	overlay.classList.remove('show-popup')
	popupForm.classList.remove('show-popup')
	popupForm.classList.remove('anim')
});