function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatDateValue(hours);
    minutes = formatDateValue(minutes);
    minutes = formatDateValue(minutes);

    //Update time
    const timeHolder = document.getElementById('time');
    timeHolder.innerText = hours + ':' + minutes + ':' + seconds;

    //update weekday

    function getWeekday(date) {
        const weekdayIndex = date.getDay();
        switch (weekdayIndex) {
            case 0: return 'Söndag';
            case 1: return 'Måndag';
            case 2: return 'Tisdag';
            case 3: return 'Onsdag';
            case 4: return 'Torsdag';
            case 5: return 'Fredag';
            case 6: return 'Lördag';
        }
    }
}

function formatDateValue(value) {
    if (value < 10) {
        return '0' + value;
    }
}