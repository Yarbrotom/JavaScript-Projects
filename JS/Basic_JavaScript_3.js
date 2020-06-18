function mathFunction () {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subFunc () {
    var subtraction = 5 - 2;
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + subtraction;
}

function multFunc () {
    var multiply = 3 * 2;
    document.getElementById("Multiply").innerHTML = "3 x 2 = " + multiply;
}

function divFunc () {
    var divide = 4 / 2;
    document.getElementById("Divide").innerHTML = "4 / 2 = " + divide;
}

function moreMath () {
    var answer = (2 + 5) * 2 / 7 - 1;
    document.getElementById("MoreMath").innerHTML = "Two plus five multiplied by two then divided by seven and take one away equals " + answer;
}

function moduFunc () {
    var modulus = 5 % 2;
    document.getElementById("Modulus").innerHTML = "The modulus of five divided by two is " + modulus;
}

function negationFunc () {
    var negative = 10;
    document.getElementById("Negation").innerHTML = -negative;
}

function incrementFunc () {
    var number = 4;
    number++;
    document.getElementById("Increment").innerHTML = "The answer is " +number;
}

function decrementFunc () {
    var number = 4;
    number--
    document.getElementById("Decrement").innerHTML = "The answer is " + number;
}

function randomFunc () {
    number = Math.random() * 10;
    document.getElementById("Random").innerHTML = "Did you pick " + number + "?";
}

function pi () {
    number = Math.PI;
    document.getElementById("PI").innerHTML = number;
}