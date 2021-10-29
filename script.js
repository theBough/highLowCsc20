let rndNum;
let guesses;
function setup(){
  rndNum = Math.random()*100
  rndNum = Math.floor(rndNum) + 1;
  console.log(rndNum)
  guesses = 0;
  
}//end setup

function myFunction(){
  let theirGuess = document.getElementById("theirGuess").value;
  guesses += 1;
  document.getElementById("guesses").innerHTML = guesses;
  if(theirGuess > rndNum){
    document.getElementById("feedback").innerHTML = "Too High";
  }else if(theirGuess < rndNum){
    document.getElementById("feedback").innerHTML = "Too Low";
  }else{
    document.getElementById("feedback").innerHTML = "You Got!!";
  }
}//end function
