$(function () {
    $("#work1b").on("click", function () {
        //var x = 5;
        //debugger;
        //alert("Hi");
        //$("h1").text("Hellow");
        var numberofListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberofListItem);

        $("h3").text($("li").eq(randomChildNumber).text());
        $("#test").empty();
        $("#test").append(`<img src = "images/${randomChildNumber}.jpg" width="600px" heigh="400px">`);
    });
});