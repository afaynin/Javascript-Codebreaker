let comboString = "";
let hint = "";
let secretCombo = Math.ceil(Math.random()* 3).toString() + " " + Math.ceil(Math.random()* 3).toString() + " " + Math.ceil(Math.random()* 3).toString() + " ";
let guesses = document.getElementById("guesses");
let clock = document.getElementById("left");
let combo = document.getElementById("combination");

function convert(String){
    let s = String;
    s = s.replace(/\s/g, '');
    return parseInt(s.trim(), 10);
}

function combination(){
 

    let id = this.id;
    
   

    
    if(id === "one"){
        comboString += "1 "
        combo.textContent += "1 ";
    }
     if(id === "two"){
        comboString += "2 "
        combo.textContent += "2 ";
    }
    if(id === "three"){     
        comboString += "3 " 
        combo.textContent += "3 ";
     }
  if(id === "clear"){
    comboString = "";
    combo.textContent = "";
  }
  if(comboString.length >= 5){
  combinationInputted(secretCombo, comboString);
  combo.textContent = "";
  comboString = "";
  }
     
    }
 function combinationInputted(secretCombo, comboString){
    if(comboString.length >= 5){
        if(secretCombo === comboString){
            
            alert("YOU WIN! You spend the rest of your life with your riches. Except for the fact that you are stuck in an infinite time loop, doomed to repeat this trial forver, so the program will now automatically restart. Anyway please give me a hundred, please. I need this for my grade. I'll do anything. Please.");
            document.location.reload();
        }
        if(convert(secretCombo)>convert(comboString)){
            hint = "Less than combo     ";
            
        }
        if(convert(secretCombo)<convert(comboString)){
            hint = "Greater than combo  ";
            
        }
        guesses.textContent += " " + comboString + "-> " + hint + "!";
        clock.textContent -= 1;
        if(clock.textContent === "0"){
          
            alert("GAME OVER! You spend the rest of your life in prison. The program will now automatically restart so you don't have to deal with the magnitude of your failure, but between you and me... I know what you did. Oh yeah, the combo was " + secretCombo + ".");
            document.location.reload();
        }

        combo.textContent = "";
        comboString = "";
     }
 }
 
 
 
 const buttons = document.querySelectorAll("button");
 for (const button of buttons){
     button.addEventListener("click", combination);
 }
 