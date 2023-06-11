let numContainer= document.getElementById("numberContainer");
let PreviousNum1 = document.getElementById("preNumPlacer-1");
let PreviousNum2 = document.getElementById("preNumPlacer-2");
let PreviousNum3 = document.getElementById("preNumPlacer-3");


for(let i=1;i<=90;i++){
    let numElement= document.createElement("input");
    let newLine= document.createElement("br");
    numElement.classList.add("box");
    numElement.type="text";
    numElement.placeholder=i;
    numElement.id=i;
    numContainer.appendChild(numElement);
    document.getElementById(i).disabled=true;
    if(i%10===0){
        numContainer.appendChild(newLine);
    }

}
const arr=[];
count=0;
function numCall(){
    let randomNumber= getRandomNumber();
    arr.push(randomNumber);
    let utterance = new SpeechSynthesisUtterance(randomNumber);
    // Utterance.lamg="tr";
    speechSynthesis.speak(utterance);
    let numHolder= document.getElementById("numPlacer");
        numHolder.textContent=randomNumber;
    
    let ans= document.getElementById(randomNumber);
    ans.style.backgroundColor= "lightcoral";
    PreviousNum1.textContent=arr[count-3];
    PreviousNum2.textContent=arr[count-2];
    PreviousNum3.textContent=arr[count-1];
    count++;

}


const min = 1;
const max = 90;
const numbers = [];

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  if (numbers.includes(randomNumber)) {
    return getRandomNumber();
  } else {
    numbers.push(randomNumber);
    return randomNumber;
  }
}

function Restart(){
    location.reload();
}
function startGame(){
  let check= document.getElementById("myCheckbox");
    setTimeout(function repeat() {
      if(check.checked===true){
        numCall();
      }
        setTimeout(repeat, 5000); 
      },5000);
}


