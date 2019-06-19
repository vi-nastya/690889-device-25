var contactUsLink = document.querySelector(".contact-us-button");
var contactPopup = document.querySelector(".contact-us-popup");
var closeForm = contactPopup.querySelector(".popup-close");

contactUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.add("popup-show");
});

closeForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (contactPopup.classList.contains("popup-show")) {
            contactPopup.classList.remove("popup-show");
        }
    }
});


var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".map-popup");
var closeMap = mapPopup.querySelector(".popup-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("popup-show")) {
            mapPopup.classList.remove("popup-show");
        }
    }
});