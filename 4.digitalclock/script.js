let hur = document.getElementById("hur")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let ampm  = document.getElementById("AMPM")


// console.log(dates);
// console.log(min);
// console.log(sec);
// console.log(hur);

setInterval(() => {
    let dates = new Date()
    let hours = dates.getHours() 
    let minutes = dates.getMinutes() 
    let seconds = dates.getSeconds() 
    
    let ss = hours >= 12 ? "PM" : "AM";
    hours= hours % 12
    hours = hours ? hours : 12
   
//   hours = hours < 10? '0' + hours : hours;
   
    // hours = hours < 10 ? "PM" : "AM";

// hur.innerHTML = hours
    hur.innerHTML = hours < 10? '0' + hours : hours;
    min.innerHTML = minutes < 10? '0' + minutes: minutes;
    sec.innerHTML = seconds < 10? '0' + seconds: seconds;
    ampm.innerHTML = ss
    
}, 1000);
