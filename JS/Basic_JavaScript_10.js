function Call_Loop () {
    var i = 0;
    while (i < 12) {
        i++
    }
    document.getElementById("Loop").innerHTML = i;
}

var Dogs = ["Corgi", "Pug", "Beagle", "Lab"];
var Breeds = "";
var X;
function for_Loop () {
    for (X = 0; X < Dogs.length; X++) {
        Breeds += Dogs[X] + "<br>";
    }
    document.getElementById("Dog_Breeds").innerHTML = Breeds;
}

function corgi_pics() {
    var Corgi_Picture = [];
    Corgi_Picture[0] = "eating";
    Corgi_Picture[1] = "running";
    Corgi_Picture[2] = "splooting";
    Corgi_Picture[3] = "sleeping";
    document.getElementById("Corgi").innerHTML =  "In this picture you can see a corgi "  + Corgi_Picture[1] + ".";
}

function constant_function () {
    const Scotch = {distillery: "Ardbeg", age: "12", finish: "Oak"};
    Scotch.age = "14";
    Scotch.abv = "40%";
    document.getElementById("Constant").innerHTML = "Our featured scotch today is a " +
         Scotch.age + " year aged " + Scotch.distillery + " that is cut to " + Scotch.abv + " abv."
}

function let_function () {
    var Z = 24;
    document.write(Z);
    {
        let Z = 11;
        document.write("<br>" + Z);
    }
    document.write("<br>" + Z);
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();