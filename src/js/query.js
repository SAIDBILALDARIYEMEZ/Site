import $ from "jquery";
$(".Header-switch").on("click", function (event) {
    toggleMenu();
    event.stopPropagation();
});
$(document).on("click", function () {
    hideMenu();
});

$(".Header").on("click", function (event) {
    event.stopPropagation();
});
function toggleMenu() {
    $(".Header").toggleClass("menu-show");
}
function hideMenu() {
    $(".Header").removeClass("menu-show");
}



var elem = document.querySelector('.Highlights-slider');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
});

function toggleHighlight(cellElement) {
    document.querySelectorAll('.Highlights-item').forEach(item => item.classList.remove('is-expanded'));

    if (cellElement) {
        $(cellElement).addClass('is-expanded');
    }

    flkty.reposition();
}

flkty.on('staticClick', function (event, pointer, cellElement, cellIndex) {
    toggleHighlight(cellElement);
});

document.addEventListener('click', function (event) {
    if (!elem.contains(event.target)) {
        toggleHighlight(null);
    }
});





/*
$(document).ready(function () {
    $('.Cards-item').bind('click', function () {
        // aktif sınıfı olan tüm elemanlardan aktif sınıfı kaldır
        $('.active').removeClass('active');
        // tıklanan öğeye active sınıfını ekle
        $(this).addClass('active');
    });
});
*/
