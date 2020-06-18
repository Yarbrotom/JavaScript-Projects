function Turn_It_Blue () {
    var str = "Some blue text.";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}

function aFunc () {
    var sentance = "Let's concatenate";
    sentance += " on click!";
    document.getElementById("Concatenate").innerHTML = sentance;
}