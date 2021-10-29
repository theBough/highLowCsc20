let rndNum;
function setup(){
  rndNum = Math.random()*100
  rndNum = Math.floor(rndNum) + 1;
  console.log(rndNum)
  
}//end setup

function myFunction(){
  let theirGuess = document.getElementById("theirGuess").value;
  if(theirGuess > rndNum){
    document.getElementById("feedback").innerHTML = "Too High";
  }else if(theirGuess < rndNum){
    document.getElementById("feedback").innerHTML = "Too Low";
  }else{
    document.getElementById("feedback").innerHTML = "You Got!!";
  }
}//end function
