var symbols = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
              ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "LC"],
              ["", "C", "CC", "CCC", "DC", "D", "DC", "DCC", "DCCC", "CM" ],
              ["", "M", "MM", "MMM"]];


function romanNumerals(number){
  if (number > 0 || number <4000) {
    var numeral = "";
    var numberInput = number.split('').reverse();
      for (var i =0; i < numberInput.length; i++) {
      var roman = symbols[i]; 
      var numeral = roman[(numberInput[i])] + numeral;
  } return numeral;
  } else {
    return alert("enter a number greater than 0 and less than 4,000");
  }
}



//front end
$(document).ready(function(){
  $("form#roman").submit(function(event){
    event.preventDefault();
    var numbers = $("input#number").val();
    var result = romanNumerals(numbers);
    $("#output").text(result);
  });
});





////BAD CODE
//
// var romanNumeral = function (numbers) {
//   var romanNumber = "";
//   if (!numbers || numbers <= 0 || numbers >= 4000) {
//     return alert("enter a number greater than 0 and less than 4,000");
//   } else {
//   for (i = 0; i < numbersArray.length; i++) {
//       if (numbers === numbersArray[i]) {
//       return symbols[i];
//       }
//     }
//   }
// }


//   var romanNumber = ""
//   if (!numbers || numbers <= 0 || numbers >= 4000) {
//     return alert("enter a number greater than 0 and less than 4,000");
//   } else {
//   for (i = 0; i < numbersArray.length; i++) {
//       if (numbers === numbersArray[i]) {
//       return symbols[i];
//       }
//       // var finalNumber = romanNumber.push([firstNumber + secondNumber + thirdNumber lastNumber]);
//     }
//   }
// }
