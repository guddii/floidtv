function tabCtrl(id) {

	var element = document.querySelectorAll('[data-selector="tabbar/tab"]');
	for (var i = 0; i < element.length; i++) {
		if (element[i].dataset.id === id) {
			element[i].classList.add('tabbar__tab__active');
		} else {
			element[i].classList.remove('tabbar__tab__active');
		}
	}

}

function tabItemCtrl(id) {

	var element = document.querySelectorAll('[data-selector="tabbar/item"]');
	for (var i = 0; i < element.length; i++) {
		if (element[i].dataset.id === id) {
			element[i].classList.remove('tabbar__item--hidden');
		} else {
			element[i].classList.add('tabbar__item--hidden');
		}
	}

}

function init() {

	var links = document.querySelectorAll('[data-selector="tabbar/tab"]');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function (event) {
			event.preventDefault();
			tabCtrl(this.dataset.id);
			tabItemCtrl(this.dataset.id);
		}, false);
	}

}

export default init;
