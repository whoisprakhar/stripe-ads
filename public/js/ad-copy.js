var HOST = 'https://ads-placement.herokuapp.com';


function app() {
  var stripe = Stripe('pk_test_GnrilSm9CZKcyUrLja2xzrrH');

  var url = window.location.href.split('/');
  var skuId = 'sku_' + url[url.length - 1];

  var mPayButton = document.querySelector('button');

  var mAdCopyTextArea = document.querySelector('textarea');
  var alert = document.querySelector('.alert');

  mPayButton.disabled = true;

  mAdCopyTextArea.onkeyup = function(event) {
    mPayButton.disabled = event.target.value.length == 0;
  };

  mPayButton.onclick = function(event) {
    stripe.redirectToCheckout({
      items: [
        { sku: skuId, quantity: 1 }
      ],
      successUrl: HOST + '/payment/success',
      cancelUrl: HOST + '/payment/cancelled',
    }).then(function (result) {
      alert.classList.remove('d-none');
      alert.innerHTML = result.error.message;
    });
  };
}

window.addEventListener('DOMContentLoaded', app);
