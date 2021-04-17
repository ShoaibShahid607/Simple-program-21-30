
  // 21.	 Write a js program to check whether a number is negative, positive or zero.

// const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }

// check if number is 0
// else if (number == 0) {
//   console.log("The number is zero");
// }

// if number is less than 0
// else {
//      console.log("The number is negative");
// }


// 23. Write a js program to check whether a number is even or odd.

// const number = prompt("Enter a number: ");

// //check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }

// 24. Write a js program to check whether a year is leap year or not.
// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));


//25. Write a js program to check whether a character is alphabet or not.

//26. Write a js program to input any alphabet and check whether it is vowel or consonant.

// var input = prompt("Enter a character:");
// if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
// console.log("Its a vowel");
// } else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
//   console.log("Its a consonant");
// } else {
//     console.log("Invalid input please enter an alphabet");
//  }

// 27.Write a js program to input any character and check whether it is alphabet, digit or special


// 28.	 Write a js program to find cube of any number using function.


// var n=parseInt(prompt("Enter Number:"));

//              var cube;

//              var cube=n*n*n;

//              document.write("Cube of a Number = "+cube);




// 29.	 Write a js program to find diameter, circumference and area of circle using functions.
    
    // // var r, d, c, a;
    
    // // r = radius
    // // d = diameter
    // // c = circumference
    // // a = area
    
    // /* Calculation of diameter, circumference and area */
    
    // r = 10;
    // d = 2 * 10;
    // c = 2 * Math.PI * 10;
    // a = Math.PI * (10 * 10);
    
    // document.write("Diameter = " + d + " units<br />");
    // document.write("Circumference = " + c + " units<br />");
    // document.write("Area = " + a + " sq. units");
    
    // Write a js program to find maximum and minimum between two numbers using functions.

let num1 = 10
let num2 = 20

switch (num1>num2) {
    case false:
      console.log(num2);
      break;
    case true:
      console.log(num1);
     break;
    }