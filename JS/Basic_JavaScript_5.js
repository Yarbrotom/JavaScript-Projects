function typeOf () {
    document.write(typeof "Word")
}

function infinity () {
    var inf = 3E400;
    var neg = -4E500;
    document.getElementById("Infinity").innerHTML = "What does JS think about 3 x 10 to the power of 400? " + inf + " How about -4 x 10 to the power of 500? " + neg;
}

function greater () {
    var answer = 10 > 2;
    document.getElementById("Greater").innerHTML = "10 > 2 is " + answer;
}

function lessThan () {
    var answer = 10 < 2;
    document.getElementById("LessThan").innerHTML = "10 < 2 is " + answer;
}

function log () {
    console.log(2 + 2);
}

function coerce () {
    var answer = "10" + 5;
    document.getElementById("Coerce").innerHTML = answer;
}

function trueAndFalse () {
    var t = (15 == 15);
    var f = (15 == 12);
    document.getElementById("TrueAndFalse").innerHTML = "15 == 15 " + t + ". 15 == 12 " + f + "!";
}

function tripleTrue () {
    var t = 10 === 10;
    document.getElementById("TripleTrue").innerHTML = t;
}

function triple () {
    var t = "11" === 10;
    document.getElementById("Triple").innerHTML = t;
}

function tripleSame () {
    var t = "10" === 10;
    document.getElementById("TripleSame").innerHTML = t;
}

function tripleData () {
    var t = 11 === 10;
    document.getElementById("TripleData").innerHTML = t;
}

function andFalse () {
    var r = (10 > 4 && 7 > 8);
    document.getElementById("AndFalse").innerHTML = r;
}

function andTrue () {
    var r = (12 > 4 && 8 > 5);
    document.getElementById("AndTrue").innerHTML = r;
}

function orTrue () {
    var r = (12 > 4 || 5 > 5);
    document.getElementById("OrTrue").innerHTML = r;
}

function orFalse () {
    var r = (12 > 14 || 5 > 5);
    document.getElementById("OrFalse").innerHTML = r;
}

function notTrue () {
    var r = !(10 > 5);
    document.getElementById("NotTrue").innerHTML = r;
}

function notFalse () {
    var r = !(10 > 12);
    document.getElementById("NotFalse").innerHTML = !(10 > 12);
}
