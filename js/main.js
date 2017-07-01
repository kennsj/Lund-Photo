/*
var imgArray = [
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-441840.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-531657.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-511501.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-133084.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-290365.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-309978.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-191615.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-204149.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-376797.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-297823.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-294660.jpg'
]
*/

/*

var imgArray = [
    'images/2fugler.jpg',
    'images/blomst_bw.jpg',
    'images/fjaera.jpg',
    'images/flue.jpg',
    'images/fugl-macro.jpg',
    'images/fugl.jpg',
    'images/fugler.jpg',
    'images/hav.jpg',
    'images/mane.jpg',
    'images/ramme.jpg',
    'images/silhouette.jpg'
]

*/

// Preload images

var imgArray = new Array('images/2fugler.jpg', 'images/blomst_bw.jpg', 'images/fjaera.jpg', 'images/fjaera.jpg', 'images/flue.jpg', 'images/fugl-macro.jpg', 'images/fugl.jpg', 'images/fugler.jpg', 'images/hav.jpg', 'images/mane.jpg', 'images/ramme.jpg', 'images/silhouette.jpg');
var imagesLoaded = new Number(0);

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    var images = new Array();
}

// Scripts for image gallery

document.querySelector('img').src = imgArray[0]

var i = 0

var prev = document.querySelector('.prev-btn')
var next = document.querySelector('.next-btn')
var slideCurrent = document.querySelector('.slider-current')
var slideLength = document.querySelector('.slider-length')

slideCurrent.textContent = i + 1;
slideLength.textContent = imgArray.length;

next.addEventListener('mousedown', function () {
    nextImg()
})

prev.addEventListener('mousedown', function () {
    prevImg()
})


function nextImg() {
    if (i === imgArray.length - 1) {

        i = 0;
        document.querySelector('img').classList.add('hide-img');

        setTimeout(function () {
            document.querySelector('img').classList.remove('hide-img');
            document.querySelector('img').src = imgArray[i];

            slideCurrent.textContent = i + 1;
        }, 500);

    } else {

        i++;

        document.querySelector('img').classList.add('hide-img');

        setTimeout(function () {
            document.querySelector('img').classList.remove('hide-img');
            document.querySelector('img').src = imgArray[i];


            slideCurrent.textContent = i + 1;
        }, 500);
    }
}

function prevImg() {
    if (i === 0) {

        i = imgArray.length - 1;

        document.querySelector('img').classList.add('hide-img');

        setTimeout(function () {
            document.querySelector('img').classList.remove('hide-img');
            document.querySelector('img').src = imgArray[i];

            slideCurrent.textContent = i + 1;
        }, 500)

    } else {

        i--;

        document.querySelector('img').classList.add('hide-img');

        setTimeout(function () {
            document.querySelector('img').classList.remove('hide-img');
            document.querySelector('img').src = imgArray[i];

            slideCurrent.textContent = i + 1;
        }, 500)
    }
}

// Show/hide navigation and skew content

var content = document.querySelector('.content')
var nav = document.querySelector('nav')
var links = document.querySelector('ul')

nav.addEventListener('mousedown', function ()  {
    content.classList.toggle('skew');
    document.querySelector('#nav-icon').classList.toggle('open');
    links.classList.toggle('show-text');
})
