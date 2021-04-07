const navbar = document.getElementById('navbar')
const dots = document.getElementById('dots')
const topek = document.getElementById('topek')
const lista = document.getElementById('lista')
const hamb = document.getElementById('hamb')
const image = document.getElementById('slider')
const dotess = [...document.querySelectorAll('.dots span')]

// zmiana zdjęć
const slideList = [{
    img: "img/img1.jpg"
},
{
    img: "img/img2.jpg"
},
{
    img: "img/img3.jpg"
}];
const time = 5000;
let active = 0;

const changeDot = () => {
    const activeDot = dotess.findIndex(dot => dot.classList.contains('active'));
    dotess[activeDot].classList.remove('active');
    dotess[active].classList.add('active')
}

changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    changeDot()
}
setInterval(changeSlide, time)

// włączenie menu przy skrolowaniu
window.addEventListener('scroll', () => {
    if (this.scrollY > 10) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

// obsługa przycisku - 3 kropki
dots.addEventListener('click', () => {
    console.log('dziala')
    topek.classList.toggle('active')
})

// obsługa hamburgera
hamb.addEventListener('click', () => {
    console.log('dziala')
    lista.classList.toggle('active')
})