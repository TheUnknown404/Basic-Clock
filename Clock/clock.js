// Function to update the current time and display it
function currentTime() {
    // Create a new Date object to get the current date and time
    let date = new Date();

    // Extract seconds, minutes, and hours from the Date object
    let ss = date.getSeconds();
    let mm = date.getMinutes();
    let hh = date.getHours();

    // Initialize session variable to "AM" (assuming it's morning)
    let session = "AM";

    // Adjust hours for proper 12-hour format and update the session variable
    if (hh === 0) {
        hh = 12;
    } else if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    // Ensure hours, minutes, and seconds are formatted as two digits with leading zeros if necessary
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    // Create a time string in the format "hh:mm:ss AM/PM"
    let time = hh + ":" + mm + ":" + ss + " " + session;

    // Update the inner HTML of the element with the class 'clock' to display the current time
    document.querySelector('.clock').innerHTML = time;
}

// Call the currentTime function every 1000 milliseconds (1 second) to update the time continuously
setInterval(currentTime, 1000);