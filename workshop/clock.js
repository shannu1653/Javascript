function updateClock() {
    let now = new Date();

    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerText = `${h}:${m}:${s}`;

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("dayName").innerText = days[now.getDay()];

  
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    document.getElementById("fullDate").innerText = `${date} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
