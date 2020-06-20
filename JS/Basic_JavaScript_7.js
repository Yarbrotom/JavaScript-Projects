var x = 15;

function add () {
    var z = 5;
    document.getElementById("First").innerHTML = x + z;
}

function add_Again () {
    document.getElementById("Second").innerHTML = x + z;
    console.log(x + z);
}

function if_Date () {
    if (new Date().getHours() < 12) {
    document.getElementById("Third").innerHTML = "It is still the morning.";    
    }
}

function feed () {
    Hour = document.getElementById("Hour").value;
    if (Hour == 24 || Hour < 5) {
        Result = "Now you have a gremlin..."
    }
    else {
        Result = "You have a happy mogwai.  Don't feed it after midnight!"
    }
    document.getElementById("Fourth").innerHTML = Result;
}

function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if(Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
