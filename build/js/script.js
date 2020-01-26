var buttonT = document.querySelector(".menu__toggle")
var menuNav = document.querySelector(".menu__nav")
var menuOrder = document.querySelector(".menu__order")
var modal = document.querySelector(".modal")
// var buttonCart = document.querySelectorAll(".js-button-cart")
// var overlay = document.querySelector(".modal-overlay-js")
// var buttonAdd = document.querySelector(".modal__button")

window.onload = function() {
    buttonT.classList.remove("menu__toggle--no-js");
    menuNav.classList.add("menu__nav--closed");
    menuOrder.classList.add("menu__order--closed");
    buttonT.classList.add("menu__toggle--opened");
  };

  buttonT.addEventListener("click", function(evt) {
    evt.preventDefault();
    menuNav.classList.toggle("menu__nav--opened");
    menuOrder.classList.toggle("menu__order--opened");
    if (buttonT.classList.contains ("menu__toggle--opened")) {
      buttonT.classList.remove("menu__toggle--opened");
      buttonT.classList.add("menu__toggle--closed");
    } else if (buttonT.classList.contains ("menu__toggle--closed")) {
      buttonT.classList.remove("menu__toggle--closed");
      buttonT.classList.add("menu__toggle--opened");
    }
  });


  if (buttonCart) {
    for (var i = 0; i < buttonCart.length; i++) {
      buttonCart[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.add("modal--js-show");
        overlay.classList.add("modal-overlay-js--show");
      })
    }};

    if (buttonAdd) {
      buttonAdd.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.remove("modal--js-show");
        overlay.classList.remove("modal-overlay-js--show");
      })
    };

    if (overlay) {
      overlay.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.remove("modal--js-show");
        overlay.classList.remove("modal-overlay-js--show");
      })
    };

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
          modal.classList.remove("modal--js-show");
          overlay.classList.remove("modal-overlay-js--show");
      }
  });
