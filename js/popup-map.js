 "use strict ";

(function () {

  var mapPopup = document.querySelector( ".popup-map ");
  var mapOpenPopup = document.querySelector( ".popup-map-open");
  var mapClosePopup = document.querySelector( ".popup-map-close");

  mapOpenPopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
  });

  mapClosePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("popup-show")) {
        mapPopup.classList.remove("popup-show");
      }
    }
  });
})();
