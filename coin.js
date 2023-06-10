let numContainer= document.getElementById("numberContainer");


for(let i=1;i<=90;i++){
    let numElement= document.createElement("input");
    let newLine= document.createElement("br");
    numElement.classList.add("box");
    numElement.type="text";
    numElement.placeholder=i;
    numElement.id=i;
    numContainer.appendChild(numElement);
    if(i%10===0){
        numContainer.appendChild(newLine);
    }

}
function numCall(){
    let randomNumber= getRandomNumber();
    let utterance = new SpeechSynthesisUtterance(randomNumber);
    // Utterance.lamg="tr";
    speechSynthesis.speak(utterance);
    let numHolder= document.getElementById("numPlacer");
        numHolder.textContent=randomNumber;
    
    let ans= document.getElementById(randomNumber);
    ans.style.backgroundColor= "lightcoral";

    
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