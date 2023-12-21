function currentTime() {
    let date = new Date();
    let ss = date.getSeconds();
    let mm = date.getMinutes();
    let hh = date.getHours();
    let session = "AM";

    if (hh === 0) {
        hh = 12
    }else if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ?"0" + hh : hh;
    mm = (mm < 10) ?"0" + mm : mm;
    ss = (ss < 10) ?"0" + ss : ss;


    let time = hh + ":" + mm + ":" + ss + " " + session;
    document.querySelector('.clock').innerHTML = time

}

setInterval(currentTime, 1000);