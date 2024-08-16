var city = prompt(`Enter Your City Name`);
console.log(typeof city)
if(city === `Karachi`);
{
    alert(`Welcome to city of lights`);
}


var per = prompt(`Enter Any Number`);
if(per >= 90 && per <= 100){
    alert(`Brilliants Your A1 Position`);
} else if(per >= 80 && per <= 90){
    alert(`Excellent Your A Position`);
}else if(per >= 70 && per <= 80){
    alert(`Very Very Good! Your B Highest Position`);
}else if(per >= 60 && per <= 70){
    alert(`Very Good Your B Position`);
}else if(per >= 50 && per <= 60){
    alert(`Good Your C Position`);
}else if(per >= 40 && per <= 50){
    alert(`Fear Your E Position`);
}else if(per < 33){
    alert(`You Fail! Please Try Again Later`);
}
else {
        alert("please Enter Valid percentage")
}


var remainingFuel = parseFloat(prompt(`Enter the remaining fuel in your car (in liters):`));

if(remainingFuel <= 0.25){
    alert(`Your car is running low!`);
}else{
    alert(`Your car is running high!`);
}


var users_value = prompt('enter any number')
var users_second_value = prompt('enter 2 number')
var users_operation_value = prompt('enter operation + - * / %')
// console.log(users_operation_value , users_second_value ,users_value)

if (users_operation_value === "+") {
    console.log(Number(users_value) + Number(users_second_value))  
}else if(users_operation_value === "-"){
    console.log(users_value - users_second_value)
}
else if(users_operation_value === "*"){
    console.log(users_value * users_second_value)
}
else if(users_operation_value === "/"){
    console.log(users_value / users_second_value)
}
else if(users_operation_value === "%"){
    console.log(users_value % users_second_value)
}else{
    console.log("Invalid operator")
}