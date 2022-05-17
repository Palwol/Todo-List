const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString().padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}
getClock();
setInterval(getClock,1000);