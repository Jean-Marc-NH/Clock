const _seg = document.querySelector(".seg");
const _min = document.querySelector(".min");
const _hours = document.querySelector(".hours");
const _reloj = document.querySelector(".reloj");
const _resize = document.querySelector(".resize");

const _numSeg = document.querySelector(".num-seg");
const _numMin = document.querySelector(".num-min");
const _numHour = document.querySelector(".num-hour");




const resize = () =>{

    let ancho = window.innerWidth;
    let alto = window.innerHeight;

    if( ancho < alto)
    {
    _reloj.style.width = `${ancho-20}px`;
    _reloj.style.height = `${ancho-20}px`;
    }else{
    _reloj.style.width = `${alto-20}px`;
    _reloj.style.height = `${alto-20}px`;
    }
}

resize();

_resize.addEventListener("click", (e)=>{
    resize();
})

setInterval(()=>{

    let time = new Date();

    let seg = time.getSeconds();
    let min = time.getMinutes();
    let hours = time.getHours();

    if(hours >= 12)
    {
        hours = hours - 12;
    }
    
    if(hours < 10){
        _numHour.innerHTML = `0${hours}`;
    }else{
        _numHour.innerHTML = `${hours}`;
    }

    if(min < 10){
        _numMin.innerHTML = `0${min}`;
    }else{
        _numMin.innerHTML = `${min}`;
    }

    if(seg < 10){
        _numSeg.innerHTML = `0${seg}`;
    }else{
        _numSeg.innerHTML = `${seg}`;
    }

    _seg.style.transform = `rotate(${seg * 6}deg)`;
    _min.style.transform = `rotate(${min * 6}deg)`;
    _hours.style.transform = `rotate(${hours * 30}deg)`;

}, 1000)
