let rndNum;
function setup(){
rndNum = Math.random()*100
  rndNum = Math.floor(rndNum) + 1;
  console.log(rndNum)
  document.getElementById("myTitle").innerHTML = rndNum;
}//end setup

function myFunction(){
  let theirGuess = document.getElementById("theirGuess").value;
  if(theirGuess > rndNum){
    document.getElementById("myTitle").innerHTML = "Too High";
  }
}//end function
