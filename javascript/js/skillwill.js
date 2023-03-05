// Exercise 1 


function execrise1 (a, b) {
    if ( a==b) {
        return "Equal";
    } else {
        return "Are not equal"
    }
}

console.log (execrise1(3, 3));                                          // // working and return equal
// console.log (exersice (3, 4));                                       // // is not working and return are not equal



// Exercise 2

function convertFtoC (fahrenheit) {
    if (isNaN(fahrenheit)) {
        return false;
    }


const celsius = (fahrenheit-32) * 5/9;

return celsius;

}

let fahrenheitTemperature = 0;                                                       // // is working and coverting Fahrenheit to Celsius
// let fahrenheitTemperature = 'not num value';                                      // // is not working and return false, becouse value is not equal of number
const celsiusTemperature = convertFtoC(fahrenheitTemperature);
console.log (celsiusTemperature);


// Exercise 3

function execrise3(a, b, op) {
    if (typeof a !== "number" || typeof b !== "number") {
      return false;
    }

    let result;
  
    switch (op) {
      case "+":
        result = a + b;
        break;
  
      case "-":
        result = a - b;
        break;
  
      case "*":
        result = a * b;
        break;
  
      case "/":
        result = a / b;
        break;
  
      default:
        console.log(false);
        return;
    }
  
    console.log(result);
  }
  
  execrise3(5, 6, "-");             // result: 5 - 3 = 2
  execrise3 (5, 6, "+");            // result: 5 + 6 = 11
  execrise3 (5, 6, "*");            // result: 5 * 6 = 30
  execrise3 (30, 6, "/");           // result: 30 / 6 = 5 
  execrise3(3, "hello", "+");       // result: false
  execrise3 (5, 6, "%");            // result: false. becouse "%" is not correct operator
 
  console.log(execrise3(5, "five", "+")) //result: false. "five" is a string and not number