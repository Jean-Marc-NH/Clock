const _seg = document.querySelector(".seg");
const _min = document.querySelector(".min");
const _hours = document.querySelector(".hours");
const _reloj = document.querySelector(".reloj");
const _resize = document.querySelector(".resize");





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

    seg = time.getSeconds();
    min = time.getMinutes();
    hours = time.getHours();


    
    _seg.style.transform = `rotate(${seg * 6}deg)`
    _min.style.transform = `rotate(${min * 6}deg)`
    _hours.style.transform = `rotate(${hours * 6}deg)`

}, 1000)