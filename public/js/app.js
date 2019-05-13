var HOST = 'https://ads-placement.herokuapp.com';
var itemClassName = 'list-group-item placement-item';

function addEvent(elms, event, callback) {
  for (var i = 0; i < elms.length; i++) {
    elms[i].addEventListener(event, callback);
  }
}


function app() {
  var stripe = Stripe('pk_test_GnrilSm9CZKcyUrLja2xzrrH');
  var selectedSkuId = null, selectedItem = null;

  var mPayButton = document.getElementById('pay-button');
  var items = document.getElementsByClassName('placement-item');
  var alert = document.getElementsByClassName('alert')[0];

  mPayButton.disabled = true;
  mPayButton.onclick = function(event) {
    stripe.redirectToCheckout({
      items: [
        { sku: selectedSkuId, quantity: 1 }
      ],
      successUrl: HOST + '/success',
      cancelUrl: HOST + '/cancelled',
    }).then(function (result) {
      alert.classList.remove('d-none');
      alert.innerHTML = result.error.message;
    });
  };


  addEvent(items, 'click', function(event) {
    if (alert.className.indexOf('d-none') == -1) {
      alert.classList.add('d-none');
    }

    if (mPayButton.disabled) {
      mPayButton.disabled = false;
    }

    var target = event.currentTarget;

    selectedSkuId = target.dataset.skuId;
    mPayButton.innerHTML = 'Pay $' + target.dataset.price;

    if (selectedItem) {
      selectedItem.className = itemClassName;
    }

    target.className += ' bg-primary text-white';
    selectedItem = target;
  });
}

window.addEventListener('DOMContentLoaded', app);
