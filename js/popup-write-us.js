'use strict';

(function () {

    var writeUsPopup = document.querySelector('.popup-write-us');
    var writeUsOpenPopup = document.querySelector('.popup-write-us-open');
    var wtiteUsClosePopup = document.querySelector('.popup-write-us-close');
    var login = writeUsPopup.querySelector('[name=login]');
    var mail = writeUsPopup.querySelector('[name=mail]');
    var message = writeUsPopup.querySelector('[name=message]');
    var form = writeUsPopup.querySelector('form');
    var isStorageSupportLogin = true;
    var isStorageSupportMail = true;
    var storageLogin = "";
    var storageMail = "";

    try {
      storageLogin = localStorage.getItem("login");
    } catch (err) {
      isStorageSupportLogin = false;
    }

    try {
      storageMail = localStorage.getItem("mail");
    } catch (err) {
      isStorageSupportMail = false;
    }

    writeUsOpenPopup.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsPopup.classList.add("popup-show");

        if (storageLogin) {
          login.value = storageLogin;
          mail.focus();
        } else {
          mail.value = storageMail;
          login.focus();
        }

        if (storageMail) {
          mail.value = storageMail;
          message.focus();
        } else {
          mail.focus();
        }
    });

      writeUsClosePopup.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsPopup.classList.remove("popup-show");
        writeUsPopup.classList.remove("popup-eror");
      });

      form.addEventListener("submit", function (evt) {
        if (!login.value || !mail.value || !message.value) {
          evt.preventDefault();
          writeUsPopup.classList.add("popup-eror");
        } else {
          if (isStorageSupportLogin) {
            localStorage.setItem("login", login.value);
          } if (isStorageSupportMail) {
            localStorage.setItem("mail", mail.value);
          }
        }
      })

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (writeUsPopup.classList.contains("popup-show")) {
            writeUsPopup.classList.remove("popup-show");
            writeUsPopup.classList.remove("popup-eror");
          }
        }
      });
})();
