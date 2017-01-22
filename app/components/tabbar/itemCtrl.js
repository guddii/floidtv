function tabItemCtrl(id) {
  document.querySelectorAll('[data-selector="tabbar/item"]').forEach(function (element) {
    if (element.dataset.id === id) {
      element.classList.remove('tabbar__item--hidden');
    } else {
      element.classList.add('tabbar__item--hidden');
    }
  });
}

[].forEach.call(document.querySelectorAll('[data-selector="tabbar/tab"]'), function (a) {
  a.addEventListener('click', function (event) {
    event.preventDefault();
    tabItemCtrl(this.dataset.id)

  }, false);
})

function activate() {
  tabs = document.getElementsByClassName("tabbar__tabs");
  for (var i = 0; i < tabs.length; i++) {

  }
}

export default tabItemCtrl;
