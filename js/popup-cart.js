'use strict';

(function () {

    var cartPopup = document.querySelector('.popup-cart');
    var cartClosePopup = document.querySelector('.popup-cart-close');
    var goodsListArr = document.querySelectorAll('.good-item');

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

      function addLink(Item) {
        var cartOpenPopup = Item.querySelector('.popup-cart-open');

        cartOpenPopup.addEventListener("click", function (evt) {
          evt.preventDefault();
          cartPopup.classList.add("popup-show");
        });
      }

      goodsListArr.forEach(function(Item){
        addLink(Item);
      });

})();
