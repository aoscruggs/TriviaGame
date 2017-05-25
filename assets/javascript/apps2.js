
var amountCorrect = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;
  
// This code will run as soon as the page loads
// window.onload = function() {  
    $("#startButton").on("click", run);

    //  When the stop button gets clicked, run the stop function.
    $("#stopButton").on("click", stop);
// };   

//  Set our number counter to whatever we want.
var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// The Quiz Object-breaks everything...?
// var quiz = {




    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
       alert ("Time started");
       intervalId = setInterval(decrement, 1000);

    }

    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time is Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      alert("Correct Responses: " + amountCorrect);
      for(var i = 1; i <= 27; i++) {
      var radios = document.getElementsByClassName('answer');
      for(var j = 0; j < radios.length; j++) {
      var radio = radios[j];
  
      if(radio.checked == false) {
      unAnswered++;
      radio.value = "already checked";
      console.log(unAnswered)
    }
  }
}

    }

    //  Execute the run function.
     // run();

//when you click a button, push the item to the playeranswer array
  

$("input[type=radio]").on("click", handleClick);
  function handleClick()
  {         
           
    for(var i = 1; i <= 27; i++) {
      var radios = document.getElementsByClassName('answer');
      for(var j = 0; j < radios.length; j++) {
      var radio = radios[j];
  
      if(radio.value == "correct" && radio.checked == true) {
      amountCorrect++;
      radio.value = "already checked";
      console.log(amountCorrect)
    } else { wrongAnswers++;


    } 
   
  }
 }                   
    
  }

  
   handleClick();

