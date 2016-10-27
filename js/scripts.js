var symbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
var numbersArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];


var romanNumeral = function (numbers) {
  var romanNumber = "";
  if (!numbers || numbers <= 0 || numbers >=4000) {
    return alert("enter a number");
  } else {
  for (i = 0; i < numbersArray.length; i++) {
      if (numbers === numbersArray[i]) {
      return symbols[i];
      }
    }
  }
}






//front end
$(document).ready(function(){
  $("form#roman").submit(function(event){
    event.preventDefault();
    var numbers = parseInt($("input#number").val());
    var result = romanNumeral(numbers);
    $("#output").text(result);
  });
});
