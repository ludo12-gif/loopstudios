const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const body = document.querySelector('body');
const menu = document.querySelector('#menu');
const header = document.querySelector('header.header');
const title = document.querySelector('div.title');


btnOpen.addEventListener('click', function () {
    console.log('click open');

    header.setAttribute('class', 'bg-color container')
    menu.classList.remove('close')
    menu.classList.add('open')
    btnClose.classList.remove('close')
    btnClose.classList.add('open')
    btnOpen.classList.remove('open')
    btnOpen.classList.add('close')
    body.classList.remove('noscroll');
});

btnClose.addEventListener('click', function () {
    console.log('click close');

    header.setAttribute('class', 'header container')
    menu.classList.remove('open')
    menu.classList.add('close')
    btnClose.classList.remove('open')
    btnClose.classList.add('close')
    btnOpen.classList.remove('close')
    btnOpen.classList.add('open')
    body.classList.add('noscroll');
});

window.addEventListener('load', function () {
    if (screen.width >= 1440) {
        const image = document.querySelectorAll('div.grid-box img')
        const text = document.querySelectorAll('div.grid-box h2')

        image.forEach((img, index) => img.addEventListener('mouseover', function () {
            img.style.opacity = 0.5;
            text[index].style.color = '#000';
        }))

        image.forEach((img, index) => img.addEventListener('mouseout', function () {
            img.style.opacity = 1;
            text[index].style.color = '#fff';
        }))
        text.forEach((txt, index) => txt.addEventListener('mouseover', function () {
            txt.style.color = '#000';
            image[index].style.opacity = 0.5;
        }))

        text.forEach((txt, index) => txt.addEventListener('mouseout', function () {
            txt.style.color = '#fff';
            image[index].style.opacity = 1;

        }))
    }
})