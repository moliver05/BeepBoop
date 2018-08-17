<<<<<<< HEAD
// business logic
var converter = function(num){
  var result = [];


  if(num < 0){
    return "I suggest a better number."
    }else if(num > 0 && num%3 === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if(num.toString().indexOf('1') > -1){
    return "Boop!";
    } else if(num%10 === 0){
    return "Beep!";
    } else {
    for(var i = 0; i <= num; i += 1){
      result.push(i);
      };
    }
    return result.toString();
  }

// user interface
$(document).ready(function(){
  $("#magicform").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($('input#inputOne').val());
    var userResult = converter(userInput);
    $("#outputR").text(userResult);
    $('#magicform').trigger('reset');
  });
});
=======
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
>>>>>>> 8cd341400d4d7fb110ac93f4abf16c3846c0975f
