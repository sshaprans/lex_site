// "use strict"
const swiper = new Swiper('.swiper', {


    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: 'slider',
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 1500,
    },
});
const gallery = new Swiper('.gallery', {

    direction: 'horizontal',
    loop: true, 
    spaceBetween: 10,
    slidesPerView: 4,
    slidesPerGroup: 4,

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    autoplay: {
        delay: 2300, 
    },
    breakpoints: {
        1201: {
            spaceBetween: 10,
            slidesPerView: 6,
        },
        900: {
            spaceBetween: 10,
            slidesPerView: 4,
        },
        650: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        300: {
            spaceBetween: 5,
            slidesPerView: 3,
        },

    },
});
const modal = document.querySelector("#modal");
const modalBtn = document.querySelectorAll(".modal-btn-js");
const closeBtn = document.getElementsByClassName("close")[0];
const overlay = document.querySelector(".overlay");

modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.add("open");
        modal.classList.add("open");
        modal.classList.add("modal-an");
        document.querySelector('body').style.overflow = 'hidden';
    })
})

closeBtn.onclick = function() {
    overlay.classList.remove("open");
    modal.classList.remove("open");
    document.querySelector('body').removeAttribute('style');
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("open");
        overlay.classList.remove("open");
        document.querySelector('body').removeAttribute('style');

    }
}

const burger = document.querySelector('.btn-burger');

burger.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('is-active');
})

const btnFixed = document.querySelector('.wrapper-contact-fixed');
const btnFixedList = document.querySelector('.contact-fixed');

btnFixed.addEventListener('click', () => {
    btnFixedList.classList.toggle('active');
})