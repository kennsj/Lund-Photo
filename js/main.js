// Show/hide navigation and skew content

var content = document.querySelector('.content')
var nav = document.querySelector('nav')
var links = document.querySelector('ul')

nav.addEventListener('mousedown', function ()  {
    content.classList.toggle('skew');
    document.querySelector('#nav-icon').classList.toggle('open');
    links.classList.toggle('show-text');
})
