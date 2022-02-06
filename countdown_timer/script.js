const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minsE1=document.getElementById('mins');
const secondsE1=document.getElementById('seconds');

const newYears = '1 January 2023'; // Change this to desired date ex: 23 March 2022

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML = formatTime(days);
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);
    // console.log(days,hours,minutes,seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

setInterval(countdown, 1000);
