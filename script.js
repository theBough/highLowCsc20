let rndNum;
let guesses;
let time;
let stopTimer;
function setup(){
  rndNum = Math.random()*100
  rndNum = Math.floor(rndNum) + 1;
  console.log(rndNum)
  guesses = 0;
  time = 60;
  stopTimer = setInterval(countDown, 1000);
}//end setup

function myFunction(){
  let theirGuess = document.getElementById("theirGuess").value;
  guesses += 1;
  document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
  if(theirGuess > rndNum){
    document.getElementById("feedback").innerHTML = "Too High";
  }else if(theirGuess < rndNum){
    document.getElementById("feedback").innerHTML = "Too Low";
  }else{
    document.getElementById("feedback").innerHTML = "You Got!!";
    clearInterval(stopTimer);
  }
}//end function
function countDown(){
  time = time -1;
  document.getElementById("timer").innerHTML = "Time: " + time;
  if(time < 1){
    document.getElementById("myButton").style.visibility = "hidden";
    clearInterval(stopTimer);
      document.getElementById("feedback").innerHTML = "You Lost";
  }
}
