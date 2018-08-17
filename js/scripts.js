// search for number
function hasNumber(string) {
  var regex = /[0-999]/;
  return regex.test(string);
}

//
var translate = function(num) {
  var stringZero = [ '0' ];
  var stringOne = [ '1' ];
  var numberThree = [ '3' ]
  // var regexp =  new RegExp("\\d+", "g");
}

  return numChanger;
};





//Front End
$(document).ready(function() {
  $("form#changer").submit(function(event) {
    event.preventDefault();
    // var numeral = parseInt($("input#numeral").val());
    var result = $("#enternum").val();
       $("#result").text(translate(result));
       $("#result").show();
     });
   });
