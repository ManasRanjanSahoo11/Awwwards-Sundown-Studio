const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const fixedDiv = document.querySelector('#fixed-div')
const elemContainer = document.querySelector('#elem-container')
// console.log(fixedDiv);
// console.log(elemContainer);

elemContainer.addEventListener('mouseenter', () => {
    fixedDiv.style.display = "block"
})
elemContainer.addEventListener('mouseleave', () => {
    fixedDiv.style.display = "none"
})

document.querySelectorAll('.elem').forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
        let imgSrc = elem.getAttribute('data-image')
        fixedDiv.style.backgroundImage = `url(${imgSrc})`
    })
})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiperAnimation()


const circle = document.querySelector('#circle');
const wrapper = document.querySelector('.swiper-wrapper');

wrapper.addEventListener('mouseenter', () => {
    circle.style.scale = 1;
});

wrapper.addEventListener('mousemove', (e) => {
    circle.style.left = e.x + 'px';
    circle.style.top = e.y + 'px';
});

wrapper.addEventListener('mouseleave', () => {
    circle.style.scale = 0;
});







const full_screen = document.querySelector('#full-screen');
const menu = document.querySelector('#menu');
let flag = 0;

menu.addEventListener('click', ()=>{
    if(flag == 0){
        full_screen.style.top = 0;
        flag = 1;
    } else {
        full_screen.style.top = '-100%';
        flag = 0;
    }
})




const loder = document.querySelector('#loder');
setTimeout(()=>{
    loder.style.top = '-100%'
}, 4000)