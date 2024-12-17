function timmer() {
    const date1 = new Date();
    const date2 = new Date("2028-07-14T00:00:00");

    const dateDiff = date2 - date1;

    const daysElement = document.getElementById('remain_days');
    const hoursElement = document.getElementById('remain_hours');
    const minutesElement = document.getElementById('remain_minute');
    const secondsElement = document.getElementById('remain_second');

    // Check if the date has passed
    if (dateDiff < 0) {
        // Calculate days after the Olympics date
        const daysAfter = Math.abs(Math.floor(dateDiff / (1000 * 60 * 60 * 24)));
        daysElement.innerHTML = `The Olympics ended ${daysAfter} days ago!`;
        hoursElement.innerHTML = '';
        minutesElement.innerHTML = '';
        secondsElement.innerHTML = '';
    } else {
        // Time remaining
        const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        const hour = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
        const minute = Math.floor((dateDiff / (1000 * 60)) % 60);
        const second = Math.floor((dateDiff / 1000) % 60);

        daysElement.innerHTML = `${day} Days`;
        hoursElement.innerHTML = `${hour} Hours`;
        minutesElement.innerHTML = `${minute} Minutes`;
        secondsElement.innerHTML = `${second} Seconds`;
    }
}

// Update timer every second
// setInterval is a call back Function 
setInterval(timmer, 1000);

