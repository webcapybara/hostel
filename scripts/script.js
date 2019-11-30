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
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
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
        delay: 10000,
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


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 150, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


/* const modalCall = ("[data-modal]");
const modalClose = ("[data-close]");

modalCall.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    $(modalId).addClass('show');

    $("body").addClass('no-scroll')


    setTimeout(function () {
        $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0)"
        })
    }, 200);


});

modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');


    modalParent.find(".modal__dialog").css({
        transform: "rotateX(90deg)"
    });
    setTimeout(function () {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');

    }, 200);



});

$(".modal").on("click", function (event) {


    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "rotateX(90deg)"
    });
    setTimeout(function () {
        $this.removeClass('show');
        $("body").removeClass('no-scroll')

    }, 200);

});

$(".modal__dialog").on("click", function (event) {
event.stopPropagation();
});
 */

/* задержка для отправки сообщения */

function closePop(){
    document.getElementById('modal_box').style.display='none';
    document.getElementById('sucsesspop').style.display='block';
    setTimeout(function() {
        document.getElementById('modal_1').style.display='none';
        document.getElementById('modal_box').style.display='block';
        document.getElementById('sucsesspop').style.display='none';
    
    }, 3000);
    console.log("ok");
    
}


function iframeclick() {
    document.getElementById("map_src").contentWindow.document.body.onclick = function() {
        document.getElementById('map_src').removeAttribute("srcdoc");
    document.getElementById('map_src').src ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.8616322892426!2d30.3050042357883!3d59.92325893269262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469630fc4ee7bd8f%3A0xdc2e3f07d02f363d!2z0JLQvtC30L3QtdGB0LXQvdGB0LrQuNC5INC_0YAuLCA0MSwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MDA2OA!5e0!3m2!1sru!2sru!4v1572454619141!5m2!1sru!2sru';
        }
    }
    


    if(window.matchMedia('(max-width: 768px)').matches){
        document.getElementById('map_src').srcdoc=('<div  style="width:auto; height:300px;"><img class="mapimg"src="img/map-mobile.jpg" style="height:100%; width:100%;"></div>');
    };