const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 1000);
});

const showTime = () =>{
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    min = min<10 ? `0${min}` : min;
    secs = secs<10 ? `0${secs}` : secs;

    if(hr>12){
        hr = hr-12;
    }
    time.innerHTML = `${hr} : ${min} : ${secs}`;

    //timeformat.innerHTML = hr>12 ? "PM" : "AM";//24 hpours time format
     timeformat.innerHTML = hr>12 ? "AM" : "PM"; // 12 hours format
}
