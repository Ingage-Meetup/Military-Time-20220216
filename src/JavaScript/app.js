
const timeConversion = (stdTime) => {
    if (stdTime === '') {
        return -1;
    }
    let militaryTime = '';
    let amPm = stdTime.substring(stdTime.length-2);
    let hour = stdTime.substring(0, 2);
    let intHour = parseInt(hour);
    let minSec = stdTime.substring(2, 8);
    let zeroHour = '00';
    if (amPm == 'AM') {
        if (hour == '12') {
            militaryTime = zeroHour + minSec;
        } else {
            militaryTime = hour + minSec;
        }  

    } else {
        let milHour = intHour%12 + 12;
        let milHourStr = '';
         militaryTime = milHour.toString() + minSec;

    }
    return militaryTime;

}

module.exports = { timeConversion };