const talkingCalendar = function(date) {
  let splitDate = date.split("/")
  let month = ""
  let day = ""
  if (splitDate[2] === '01') {
    day += '1st'
  } else if (splitDate[2] === '02') {
    day += '2nd'
  } else if (splitDate[2] < '10'){
    day += splitDate[2].charAt(1) + 'th'
  } else {
    day += splitDate[2] + 'th'
  }
  if (splitDate[1] === '01') {
    month += 'January'
  } else if (splitDate[1] === '02') {
    month += 'February'
  } else if (splitDate[1] === '03') {
    month += 'March'
  } else if (splitDate[1] === '04') {
    month += 'April'
  } else if (splitDate[1] === '05') {
    month += 'May'
  } else if (splitDate[1] === '06') {
    month += 'June'
  } else if (splitDate[1] === '07') {
    month += 'July'
  } else if (splitDate[1] === '08') {
    month += 'August'
  } else if (splitDate[1] === '09') {
    month += 'September'
  } else if (splitDate[1] === '10') {
    month += 'October'
  } else if (splitDate[1] === '11') {
    month += 'November'
  } else if (splitDate[1] === '12') {
    month += 'December'
  } return month + ' ' + day + ', ' + splitDate[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Expected Output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987