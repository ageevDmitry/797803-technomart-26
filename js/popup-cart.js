 "use strict ";

(function () {

  var cartPopup = document.querySelector(".popup-cart");
  var cartClosePopup = document.querySelector(".popup-cart-close");
  var goodsListArr = document.querySelectorAll(".good-item");

  cartClosePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (cartPopup.classList.contains("popup-show")) {
    cartPopup.classList.remove("popup-show");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (cartPopup.classList.contains("popup-show")) {
        cartPopup.classList.remove("popup-show");
      }
    }
  });

  function addLink (item) {
    var cartOpenPopup = item.querySelector( ".popup-cart-open");

    cartOpenPopup.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("popup-show");
    });
  }

  for (i = 0; i < goodsListArr.length; i++) {
    addLink(goodsListArr[i]);
  }

})();
