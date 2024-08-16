// 1. Prompting for Full Name and Mobile Model
var fname = prompt("Please Enter Your First Name");
var lname = prompt("Please Enter Your Last Name");
var fullName = fname + ' ' + lname;
alert(`Hey ${fullName}`);

var modelName = prompt('Enter your favorite mobile model');
var mobileLength = modelName.length;
alert(`${modelName} \nYour mobile model length is ${mobileLength}`);

// 2. Finding the Index of 'n' in "Pakistani"
var country = "Pakistani";
var index = country.indexOf('n');
alert(`The index of 'n' in "${country}" is ${index}`);

// 3. Counting Vowels and Non-Vowels
var userInfo = prompt('Add something');
var vowelCount = 0;
var nonVowelCount = 0;

for (var i = 0; i < userInfo.length; i++) {
    var char = userInfo.charAt(i).toLowerCase();
    if ('aeiou'.includes(char)) {
        vowelCount++;
    } else if (char !== ' ') {
        nonVowelCount++;
    }
}

console.log('Vowels:', vowelCount, 'Non-vowels:', nonVowelCount);

// 4. Capitalizing the First Letter of Each Word
function capitalizeFirstLetter(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

var name = "bilal raza attari";
var capitalized = capitalizeFirstLetter(name);
console.log(capitalized); // Output: Bilal Raza Attari

// 5. Capitalizing Full Name
var username = prompt('Add your full name', 'seerat hussain');
var username_arr = username.split(' ');

for (var i = 0; i < username_arr.length; i++) {
    var word = username_arr[i];
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    username_arr[i] = capitalized;
}

username = username_arr.join(' ');
console.log('Capitalized full name =>', username);

// 6. Modifying and Displaying Arrays
var students = ['seerat', 'hussain', 'mughal', 'khan'];
students.splice(0, 3, "ali");
alert(students);

var myName = students.slice(0, 2);
document.write(myName.join(', ')); // Join elements with a comma for display
