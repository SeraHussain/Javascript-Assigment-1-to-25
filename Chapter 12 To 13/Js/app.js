

// Question 07
var userInput = prompt(`Enter a Time in 24-hours`);

if(userInput >= '00' && userInput <= '04'){
    alert(`Good Night`)
}else if(userInput >= '05' && userInput <= '12'){
    alert(`Good Noon`)
}else if(userInput >= '13' && userInput <= '16'){
    alert(`Good Afternoon`)
}else if(userInput >= '17' && userInput <= '23'){
    alert(`Good Evening`)
}else{
    alert(`Please Enter A Time`)
};