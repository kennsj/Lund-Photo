$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['one', 'two', 'three', 'four']
    });
});



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

// var imgArray = new Array('images/2fugler.jpg', 'images/blomst_bw.jpg', 'images/fjaera.jpg', 'images/flue.jpg', 'images/fugl-macro.jpg', 'images/fugl.jpg', 'images/fugler.jpg', 'images/hav.jpg', 'images/mane.jpg', 'images/ramme.jpg', 'images/silhouette.jpg');

// Image gallery

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

window.onkeyup = function () {
    switch (event.keyCode) {
        case 37:
        case 40:
            prevImg();
            break;
        case 38:
        case 39:
            nextImg();
            break;
    }
}


function nextImg() {
    if (i == imgArray.length - 1) {

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

var content = document.querySelectorAll('.image-bg')
var html = document.querySelector('html');
var nav = document.querySelector('nav')
var links = document.querySelector('ul')

/*

nav.addEventListener('mousedown', function ()  {
    content.classList.toggle('skew');
    document.querySelector('#nav-icon').classList.toggle('open');
    links.classList.toggle('show-text');
    html.classList.toggle('overflow');
})

*/

nav.addEventListener('mousedown', () => {

    for (y = 0; y < content.length; y++) {

        content[y].classList.toggle('skew');
        document.querySelector('#nav-icon').classList.toggle('open');
        links.classList.toggle('show-text');
        html.classList.toggle('overflow');
        console.log(content[i])

        if ($('ul').hasClass('show-text')) {
            $.fn.fullpage.setAllowScrolling(false);
            console.log('Disable');
        } else {
            $.fn.fullpage.setAllowScrolling(true);
            console.log('Enable');
        }
    }
})



// content.classList.toggle('skew');
// document.querySelector('#nav-icon').classList.toggle('open');
// links.classList.toggle('show-text');
// html.classList.toggle('overflow');
