const start=document.getElementById("start");
const stop=document.getElementById("stop");
const timer=document.getElementById("timer");
const alertDiv=document.getElementById("alert");

// setTimeout(testas, 3000);  - iškviečia vieną kartą
// timerId=setInterval(testas, 1000);  - iškviečia nuolatos iki tuomet kai bus sustabdytas


let i=0;
let timerId;
let blinkId;
let mazejimoId;
//Šią funkciją iškviesime kas sekundę
let kasSekunde=()=>{
    [min,sec]=timer.value.split(":");
    total=Number(min)*60+Number(sec);
    total--;
    min= Math.floor(total/60);
    sec=total % 60;
    timer.value=`${min}:${String(sec).padStart(2,'0')}`;
    if (total==0){
        clearInterval(timerId);
        blinkId=setInterval(blink,250);
        mazejimoId=setInterval(sumazek,10);
    }
}

let blinkTimes=100;
//Mirksejimas kai baigsis laikas
const blink=()=>{
    if (alertDiv.classList.contains("alert-secondary")){
        alertDiv.classList.remove("alert-secondary");
        alertDiv.classList.add("alert-danger");
    }else{
        alertDiv.classList.remove("alert-danger");
        alertDiv.classList.add("alert-secondary");
    }
    blinkTimes--;
    if (blinkTimes==0){
        clearInterval(blinkId);
        blinkTimes=100;
    }
}

let timerioSpalva=255;

const sumazek=()=>{
    timerioSpalva--;
    timer.style.backgroundColor=`rgb(255,${timerioSpalva},${timerioSpalva})`;
    if (timerioSpalva==0){
        clearInterval(mazejimoId);
    }
}



let startTimer=()=>{
   timerId=setInterval(kasSekunde, 1000);
}

let stopTimer=()=>{
   clearInterval(timerId);
   clearInterval(blinkId);
   timerioSpalva=255
   timer.style.backgroundColor=`rgb(255,${timerioSpalva},${timerioSpalva})`;
}


start.onclick=startTimer;
stop.onclick=stopTimer;