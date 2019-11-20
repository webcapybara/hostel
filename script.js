// скрытие и показ блоков

let a;

function show(a) {
    document.getElementById('id1').style.display = 'none';
    document.getElementById('id2').style.display = 'none';
    document.getElementById('id3').style.display = 'none';
    document.getElementById('id4').style.display = 'none';
    document.getElementById('id5').style.display = 'none';
    document.getElementById(a).style.display = 'flex';

}


// переменные для слайдеров

var swiper1 = new Swiper('.swiper1', {
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
});
var swiper2 = new Swiper('.swiper2', {
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
});
var swiper3 = new Swiper('.swiper3', {
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
    },
});
var swiper4 = new Swiper('.swiper4', {
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination4',
        clickable: true,
    },
});
var swiper5 = new Swiper('.swiper5', {
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination5',
        clickable: true,
    },
});
var swiperhead = new Swiper('.swiper-head', {
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination-head',
        clickable: true,
    },
});
var swiperhead = new Swiper('.swiper_around', {
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

//плавное появление страницы
setTimeout(function(){
	document.body.classList.add('body_visible');
}, 100);