function addEvent(elms, event, callback) {
  for (var i = 0; i < elms.length; i++) {
    elms[i].addEventListener(event, callback);
  }
}


function app() {
  var itemClassName = 'list-group-item placement-item';
  var selectedItem = null;

  var mContinueBtn = document.querySelector('a');
  var items = document.getElementsByClassName('placement-item');

  addEvent(items, 'click', function(event) {
    var target = event.currentTarget;

    selectedSkuId = target.dataset.skuId;
    mContinueBtn.href = '/ad-copy/' + target.dataset.skuId.split('_')[1];

    if (selectedItem) {
      selectedItem.className = itemClassName;
    }

    target.className += ' bg-primary text-white';
    selectedItem = target;
  });
}

window.addEventListener('DOMContentLoaded', app);
