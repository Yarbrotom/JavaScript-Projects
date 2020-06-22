function combined () {
    var part_1 = "The beginning ";
    var part_2 = "and "
    var part_3 = "the end."
    var whole = part_1.concat(part_2, part_3);
    document.getElementById("Something").innerHTML = whole;
}

function slice_Method () {
    var whole = "Push button to display a chunk of this sentance.";
    var chunk = whole.slice(12,23);
    document.getElementById("Chunk").innerHTML = chunk;
}

function new_String () {
    var n = 451;
    document.getElementById("New_String").innerHTML = n.toString();
}

function precision () {
    var x = 3.1415926;
    document.getElementById("Number").innerHTML = x.toPrecision(4);
}