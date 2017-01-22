function tabCtrl(id) {
  document.querySelectorAll('[data-selector="tabbar/tab"]').forEach(function (element) {
    if (element.dataset.id === id) {
      element.classList.add('tabbar__tab__active');
    } else {
      element.classList.remove('tabbar__tab__active');
    }
  });
}

function tabItemCtrl(id) {
  document.querySelectorAll('[data-selector="tabbar/item"]').forEach(function (element) {
    if (element.dataset.id === id) {
      element.classList.remove('tabbar__item--hidden');
    } else {
      element.classList.add('tabbar__item--hidden');
    }
  });
}

function init() {
  [].forEach.call(document.querySelectorAll('[data-selector="tabbar/tab"]'), function (a) {
    a.addEventListener('click', function (event) {
      event.preventDefault();
      tabCtrl(this.dataset.id);
      tabItemCtrl(this.dataset.id);

    }, false);
  });
}

export default init;
