'use strict';

(function () {

    var cartPopup = document.querySelector('.popup-cart');
    var cartOpenPopup = document.querySelector('.popup-cart-open');
    var cartClosePopup = document.querySelector('.popup-cart-close');
    var goodsListArr = document.querySelectorAll('.popup-cart-open');

      cartOpenPopup.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("popup-show");
      });

      cartClosePopup.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.remove("popup-show");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (cartPopup.classList.contains("popup-show")) {
            cartPopup.classList.remove("popup-show");
          }
        }
      });


})();
