function scotch () {
    var Glenfiddich = {
        Age:15,
        Abv:"40%",
        Finish:"Sherry Cask",
        Finish: "New Oak"
    };
    delete Glenfiddich.Finish;
    document.getElementById("Dictionary").innerHTML = Glenfiddich.Finish;
}