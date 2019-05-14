var itemClassName = 'list-group-item placement-item';

function addEvent(elms, event, callback) {
  for (var i = 0; i < elms.length; i++) {
    elms[i].addEventListener(event, callback);
  }
}


function app() {
  var selectedSkuId = null, selectedItem = null;

  var mContinueBtn = document.getElementById('btn-continue');

  var items = document.getElementsByClassName('placement-item');
  var alert = document.getElementsByClassName('alert')[0];


  addEvent(items, 'click', function(event) {
    if (alert.className.indexOf('d-none') == -1) {
      alert.classList.add('d-none');
    }

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
