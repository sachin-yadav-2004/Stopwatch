let displayTimer=document.querySelector('.displayTimer');
let startBtn=document.getElementById('startBtn');
let stopBtn=document.getElementById('stopBtn');
let resetBtn=document.getElementById('resetBtn');

let msec= 0;
let sec= 0;
let min= 0;

let timerId=null;

function startTimer(){
    msec++
    if(msec== 99){
        msec=0;
        sec++;
        if(sec==59){
            sec=0;
            min++;
        }
    } 

    let msecstring= msec<10 ? `0${msec}` : msec;
    let secstring= sec<10 ? `0${sec}` : sec;
    let minstring= min<10 ? `0${min}` : min;
    displayTimer.innerHTML=`${minstring}     :     ${secstring}     :     ${msecstring}`;
}

// Star Button Logic----------------------------------------------
startBtn.addEventListener('click',function(){
    if (timerId!==null){
        cleanInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
});

// Stop Button Logic --------------------------------------------------
stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerId=null
});

// reset Button Logic--------------------------------------------------
resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    msec=0
    sec=0
    min=0
        displayTimer.innerHTML=`00 : 00 : 00`

        timerId=null
});

