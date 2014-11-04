var args = arguments[0] || {};

$.direccion.addEventListener('click', function(_e) {
    Titanium.Platform.openURL("https://www.google.com/maps/place/14%C2%B032'49.0%22N+121%C2%B000'57.2%22E/@14.5469581,121.015897,19z/data=!4m2!3m1!1s0x0:0x0");
});

$.telefono.addEventListener('click', function(e) {
    Titanium.Platform.openURL("tel:+44 1706 815678");
});