function addEvent(elms, event, callback) {
  for (var i = 0; i < elms.length; i++) {
    elms[i].addEventListener(event, callback);
  }
}


function app() {
  var selectedItem = null;

  var mContinueBtn = document.querySelector('a');
  var items = document.getElementsByClassName('list-group-item');

  addEvent(items, 'click', function(event) {
    var target = event.currentTarget;

    selectedSkuId = target.dataset.skuId;
    mContinueBtn.href = '/ad-copy/' + target.dataset.skuId.split('_')[1];

    if (selectedItem) {
      selectedItem.classList.remove('active');
    }

    target.classList.add('active');
    selectedItem = target;
  });
}

window.addEventListener('DOMContentLoaded', app);
