import {a} from './lib/module.js';

const format = (t) =>{
    return (t < 10) ? `0${t}` : t;
}

function initClock (){
    let hoursComp =document.querySelector("#hours");
    let minutesComp =document.querySelector("#minutes");
    let secondsComp =document.querySelector("#seconds");
    let ampmComp =document.querySelector("#ampm");
    
    let t = new Date();
    const time = {
        h: format(t.getHours()) ,
        m: format(t.getMinutes()),
        s: format(t.getSeconds()),
        ampm: t.getHours() >= 12 ? "PM" : "AM" 
    }

    hoursComp.innerHTML = time.h ;
    minutesComp.innerHTML = time.m;
    secondsComp.innerHTML = time.s;
    ampmComp.innerHTML = time.ampm

}

const main = () =>{
    //a();
    setInterval(initClock,1000)
}


(main)()