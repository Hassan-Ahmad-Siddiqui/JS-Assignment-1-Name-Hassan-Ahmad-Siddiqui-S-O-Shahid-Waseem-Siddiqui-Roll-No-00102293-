var message = "Welcome to JS land.....\nHappy coding!";
var studentName = "Hassan Ahmad Siddiqui";
var studentAge = "20";
var studentCourse = "Certified Full Stack Developer";
var studentEmail = "hassanas886@gmail.com";
var studentRollnum = "00102293";
var birthYear = 2003;

alert(message),
  alert(studentName),
  alert(studentAge),
  alert(studentCourse),
  alert(studentEmail),
  alert(studentRollnum);
document.write("My birth year is " + 2003 + "<br>");
document.write("Data Type of my Declared Variable is Number!");
document.write("<h1>Rules for naming JS variables</h1>");
document.write(
  "<p>Variable names can only contain letters, numbers, underscores, and dollar signs.</p>"
);
document.write("<p>For example $my_1stVariable.</p>");
document.write(
  "<p>Variables must begin with a letter, underscore, or dollar sign.</p>"
);
document.write("<p>For example $name, _name, or name.</p>");
document.write("<p>Variable names are case-sensitive.</p>");
document.write("<p>Variable names should not be JS reserved keywords.</p>");

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

// Check if the inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
  // Perform arithmetic operations
  var sum = num1 + num2;
  var difference = num1 - num2;
  var product = num1 * num2;

  // Check if num2 is not zero for division and modulus
  if (num2 !== 0) {
    var quotient = num1 / num2;
    var remainder = num1 % num2;

    // Display the results in the browser
    document.write(
      "<p>The sum of " + num1 + " and " + num2 + " is: " + sum + "</p>"
    );
    document.write(
      "<p>The difference of " +
        num1 +
        " and " +
        num2 +
        " is: " +
        difference +
        "</p>"
    );
    document.write(
      "<p>The product of " + num1 + " and " + num2 + " is: " + product + "</p>"
    );
    document.write(
      "<p>The quotient of " +
        num1 +
        " divided by " +
        num2 +
        " is: " +
        quotient +
        "</p>"
    );
    document.write(
      "<p>The remainder of " +
        num1 +
        " divided by " +
        num2 +
        " is: " +
        remainder +
        "</p>"
    );
  } else {
    // Display an error message for division and modulus by zero
    document.write(
      "<p>Error: Cannot divide or find modulus when the second number is zero.</p>"
    );
  }
} else {
  // Display an error message if the inputs are not valid numbers
  document.write("<p>Please enter valid numbers.</p>");
}

// a. Declare a variable
var myVariable;

// b. Show the value of the variable after declaration
document.write(
  "<p>Value after variable declaration is: " + myVariable + "</p>"
);

// c. Initialize the variable with some number
myVariable = 5;

// d. Show the initial value of the variable
document.write("<p>Initial value: " + myVariable + "</p>");

// e. Increment the variable
myVariable++;

// f. Show the value of the variable after increment
document.write("<p>Value after increment is: " + myVariable + "</p>");

// g. Add 7 to the variable
myVariable += 7;

// h. Show the value of the variable after addition
document.write("<p>Value after addition is: " + myVariable + "</p>");

// i. Decrement the variable
myVariable--;

// j. Show the value of the variable after decrement
document.write("<p>Value after decrement is: " + myVariable + "</p>");

// k. Show the remainder after dividing the variable's value by 3
var remainder = myVariable % 3;

// l. Show the remainder in the browser
document.write("<p>The remainder is: " + remainder + "</p>");

// a. Store a Celsius temperature into a variable
var celsiusTemperature = 30;

// b. Convert Celsius to Fahrenheit and output the result
var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
document.write(
  "<p>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F</p>"
);

// c. Store a Fahrenheit temperature into a variable
var fahrenheitTemperature2 = 92;

// d. Convert Fahrenheit to Celsius and output the result
var celsiusTemperature2 = ((fahrenheitTemperature2 - 32) * 5) / 9;
document.write(
  "<p>" + fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C</p>"
);

// Given amounts in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;

// Exchange rates
var usdToPkrRate = 155;
var sarToPkrRate = 41;

// Convert the total currency to Pakistani Rupees in a single expression
var totalPkr = usDollars * usdToPkrRate + saudiRiyals * sarToPkrRate;

// Display the result
document.write(
  "<p>Total currency in Pakistani Rupees: " + totalPkr + " PKR</p>"
);





// Initial value of 'a'
var a = 10;

// Display the initial value of 'a'
document.write("<p>The value of a is: " + a + "</p>");

// Increment 'a' and display the result
document.write("<p>The value of ++a is: " + (++a) + "</p>");
document.write("<p>Now the value of a is: " + a + "</p>");

// Use post-increment on 'a' and display the result
document.write("<p>The value of a++ is: " + (a++) + "</p>");
document.write("<p>Now the value of a is: " + a + "</p>");

// Decrement 'a' and display the result
document.write("<p>The value of --a is: " + (--a) + "</p>");
document.write("<p>Now the value of a is: " + a + "</p>");

// Use post-decrement on 'a' and display the result
document.write("<p>The value of a-- is: " + (a--) + "</p>");
document.write("<p>Now the value of a is: " + a + "</p>");

var a = 2, b = 1;
  var result = --a - --b + ++b + b--;

  document.write("'a' is " + a + "<br>");
  document.write("'b' is " + b + "<br>");
  document.write("'result' is " + result + "<br>");
