const data = new Date("Dec 31, 2023 23:59:59").getTime();
const countDown = () => {
    let currentData = new Date().getTime();
    let dateDifference = data - currentData;
    if(dateDifference >= 0) {
        const  days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        const  hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const  minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
        const  seconds = Math.floor(dateDifference % (1000 * 60) / 1000);

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        document.querySelector('.days').innerHTML = days;
        document.querySelector('.hours').innerHTML = formattedHours;
        document.querySelector('.minutes').innerHTML = formattedMinutes;
        document.querySelector('.seconds').innerHTML = formattedSeconds;
    } else {
        clearInterval(counter);
    }
}

const counter = setInterval(countDown, 1000);
// calling it initially to avoid one second delay 
countDown();