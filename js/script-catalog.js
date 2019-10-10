'use strict';

(function () {

    var cartPopup = document.querySelector('.popup-cart');
    var cartOpenPopup = document.querySelector('.popup-cart-open');
    var cartClosePopup = document.querySelector('.popup-cart-close');

      cartOpenPopup.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("popup-show");
      });

      cartClosePopup.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.remove("popup-show");
      });

})();
