var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var numbers = [1, 5, 10, 50, 100, 500, 1000];


var romanNumeral = function (numbers) {

}

if (




//front end
$(document).ready(function(){
  $("form#roman").submit(function(event){
    event.preventDefault();
    var numbers = $("input#number").val();
    var result = romanNumeral(numbers);
    $("#output").text(result);
  });
});
